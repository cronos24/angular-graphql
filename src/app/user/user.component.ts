import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const USERS_QUERY = gql`
  query {
    users{
      id,
      name,
      email,
      posts{
        title
      },
    }
  }
`;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  private query: QueryRef<any>;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.query = this.apollo.watchQuery({
      query: USERS_QUERY,
      variables: {}
    });

    this.query.valueChanges.subscribe(result => {
      console.log(result.data);
      
      this.users = result.data && result.data.users;
    });
  }

}

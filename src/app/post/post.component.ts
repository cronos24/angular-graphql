import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const POSTS_QUERY = gql`
  query {
    posts {
      id,
      title,
      content,
      author{
        name
      }
    }
  }
`;



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any[] = [];

  private query: QueryRef<any>;


  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.query = this.apollo.watchQuery({
      query: POSTS_QUERY,
      variables: {}
    });

    this.query.valueChanges.subscribe(result => {
      console.log(result.data);
      
      this.posts = result.data && result.data.posts;
    });
  }

}

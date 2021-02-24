import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'post', component: PostComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

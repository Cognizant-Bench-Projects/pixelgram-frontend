import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './component/posts/posts.component';
import { PostDetailComponent } from './component/post-detail/post-detail.component';


const routes: Routes = [
  {path: "", redirectTo: "/posts", pathMatch: "full"},
  {path: "posts", component: PostsComponent},
  {path: 'posts/:id', component: PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

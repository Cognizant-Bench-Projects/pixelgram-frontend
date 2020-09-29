import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './component/posts/posts.component';
import { HeaderComponent } from './component/header/header.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { PostDetailComponent } from './component/posts/post-detail/post-detail.component';
import { CommentsComponent } from './component/posts/post-detail/comments/comments.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { CommentService } from './service/comment.service';
import { PostService } from './service/post.service';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    PostsComponent,
    PostDetailComponent,
    CommentsComponent,
    HeaderComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    CommentService,
    PostService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

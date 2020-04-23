import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Comment } from 'src/app/model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url: string = environment.commentUri;

  constructor(private http: HttpClient) { }

  getMoreComments(postId: number, pageNum: number) {
    return this.http.get<Comment[]>(`${this.url}${postId}/comments/page/${pageNum}`);
  }
}

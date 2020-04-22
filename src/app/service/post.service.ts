import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = environment.postUri;

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.url);
  }

  getPost(id: number) {
    return this.http.get<Post>(`${this.url}${id}`);
  }
}

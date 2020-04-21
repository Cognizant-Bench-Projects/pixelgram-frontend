import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    {id: 1, description: 'Hello World. Let Be Happy Everyday!', user: 'thedummyaccount', likes: 5, comments: [], date: new Date(), imageUrl: 'https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: 2, description: 'Hello World. HAHAHAHA', user: 'user2', likes: 19, comments: [], date: new Date(), imageUrl: 'https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {id: 3, description: 'Today is a nice day.', user: 'user1', likes: 35, comments: [], date: new Date(), imageUrl: 'https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  ]

  constructor() { }

  getPosts() {
    return this.posts;
  }

  getPost(id: number) {
    return this.posts.find(post => post.id == id);
  }
}

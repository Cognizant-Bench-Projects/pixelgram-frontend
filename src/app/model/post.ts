import { Comment } from './comment'

export class Post {
  id: number;
  description: string;
  imageUrl: string;
  user: string;
  likes: number;
  date: Date;
  comments: Comment[];
  numberOfComments: number;
}
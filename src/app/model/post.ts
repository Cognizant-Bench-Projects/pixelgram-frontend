import { Comment } from './comment'
import { User } from './user';

export class Post {
  id: number;
  description: string;
  imageUrl: string;
  user: User;
  likes: number;
  date: Date;
  comments: Comment[];
  numberOfComments: number;
}
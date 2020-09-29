import { User } from './user';

export class Comment {
  id: number;
  postId: number;
  content: string;
  user: User;
  date: Date;
}
import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/model/post';
import { Comment } from 'src/app/model/comment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() post: Post;
  comments: Comment[] = [];
  page: number = 0;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.comments = this.post.comments;
  }

  getMoreComments() {
    this.page++;
    this.commentService.getMoreComments(this.post.id, this.page).subscribe(
      (data: Comment[]) => {
        this.comments.push(...data);
      }
    )
  }

}

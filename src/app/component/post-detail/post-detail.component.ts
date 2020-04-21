import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post = new Post();

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.post = this.postService.getPost(param['id']);
    })
  }

}

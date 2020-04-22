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
  isLoading: boolean = false;
  noPostFound: boolean = false;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(param => {
      this.postService.getPost(param['id']).subscribe(
        (data: Post) => {
          if (!data) {
            this.noPostFound = true;
          }
          this.post = data;
          this.isLoading = false;
        }
      )
    })
  }

}

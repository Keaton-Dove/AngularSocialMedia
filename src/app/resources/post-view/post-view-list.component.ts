import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/functionality';
import { Post } from 'src/app/functionality';

@Component({
  selector: 'app-post-view-list',
  templateUrl: './post-view-list.component.html',
  styleUrls: ['./post-view-list.component.css']
})
export class PostViewListComponent {

  //@ts-ignore
  posts: Post[];

  constructor(private postService: PostService)
  { this.fetchPosts(); }

  fetchPosts() {
    this.postService.loadPosts().subscribe(data => this.posts = data);
  }
}

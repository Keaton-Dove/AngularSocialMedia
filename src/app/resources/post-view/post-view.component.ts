import { Component, Input } from '@angular/core';
import { Post } from 'src/app/functionality';
import { SaveButtonComponent } from '../buttons';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent {
  //@ts-ignore
  @Input() post: Post;

}

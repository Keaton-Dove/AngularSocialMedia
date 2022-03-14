import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostService } from './../functionality';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {

  postForm: FormGroup;
  submitted: boolean = false;
  date = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postService: PostService
  ) { 
    this.postForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'body': ['', Validators.required],
      'datePosted': [String(this.date.getMonth() + 1) + '/' + String(this.date.getDate()) + '/' + String(this.date.getFullYear())]
    });
  }

  submit() {
    this.submitted = true;
    
    const postContent = this.postForm.getRawValue();
    this.postService.createPost(postContent)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/'); },
      err => {
        this.submitted = false;
        console.error(err); }
    );
  }
}

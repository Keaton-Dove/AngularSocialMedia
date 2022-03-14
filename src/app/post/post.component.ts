import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostService } from './../functionality';
import { UserService } from './../functionality';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  postForm: FormGroup;
  submitted: boolean = false;
  date = new Date();
  username: string = 'Guest';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postService: PostService,
    private userService: UserService
  ) { 
    this.postForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'body': ['', Validators.required],
      'datePosted': [String(this.date.getMonth() + 1) + '/' + String(this.date.getDate()) + '/' + String(this.date.getFullYear())]
    });
  }

  ngOnInit(): void {
    this.userService.activeUser
    .subscribe((userData) => {
      this.username = userData.username;
      this.postForm.addControl('username', this.formBuilder.control(this.username));
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

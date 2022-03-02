import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserService, Errors } from '../functionality';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  
  form: FormGroup;
  pageName: String = '';
  h1Text: String = '';
  submitted: boolean = false;
  errors: Errors = {errorsDict: {}};

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private httpCLient: HttpClient

  ) { 
    this.form = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Getting the last chunk of URL
      this.pageName = data[data.length - 1].path;
      // Conditional statement checking page name, assigning h1 text accordingly
      this.h1Text = (this.pageName == 'sign-in') ? 'Sign-in' : 'Sign-up';
      if (this.pageName == 'sign-up') {
        this.form.addControl('email', new FormControl());
        this.form.addControl('confirm-password', new FormControl());
      }
    });
  }

  submit() {
    console.log(this.form.getRawValue());
    this.submitted = true;
    this.errors = {errorsDict: {}};

    const credentials = this.form.value;
    this.userService.authorize(this.pageName, credentials)
    .subscribe(res => this.router.navigateByUrl('/'),
      err => {
        this.submitted = false;
        this.errors = err;
        //this.errors = {errorsDict: {fake: 'error'}}
        console.log(this.errors);
    });
  }
}
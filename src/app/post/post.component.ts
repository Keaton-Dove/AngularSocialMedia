import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  postForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder

  ) { 
    this.postForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'body': ['', Validators.required]
    });
  }

  ngOnInit() {
  }


  submit() {
    console.log(this.postForm.getRawValue());
  }
}

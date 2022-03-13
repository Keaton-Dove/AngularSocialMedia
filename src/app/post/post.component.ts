import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  postForm: FormGroup;
  submitted: boolean = false;
  date = new Date();

  constructor(
    private formBuilder: FormBuilder

  ) { 
    this.postForm = this.formBuilder.group({
      'title': ['', Validators.required],
      'body': ['', Validators.required],
      'datePosted': [String(this.date.getMonth() + 1) + '/' + String(this.date.getDate()) + '/' + String(this.date.getFullYear())]
    });
  }

  ngOnInit() {
  }


  submit() {
    console.log(this.date);
    //this.postForm.setValue('timePosted': this.date)
    console.log(this.postForm.getRawValue());
  }
}

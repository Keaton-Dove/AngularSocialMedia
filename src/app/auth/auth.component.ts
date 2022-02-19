import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  pageName: String = '';
  h1Text: String = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Getting the last chunk of URL
      this.pageName = data[data.length - 1].path;
      // Conditional statement checking page name, assigning h1 text accordingly
      this.h1Text = (this.pageName == 'sign-in') ? 'Sign-in' : 'Sign-up';
    });
  }

}

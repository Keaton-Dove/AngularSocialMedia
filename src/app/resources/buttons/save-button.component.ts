import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent {

  constructor(
    private router: Router
  ) { }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap } from 'rxjs/operators';
import { UserService } from './../../functionality';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent {

  toggle: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  toggleSave() {
    this.userService.authenticated.subscribe(
      (authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/sign-in');
        }
        else {
          this.toggle = !this.toggle;
        }
      }
    )
  }
  
}

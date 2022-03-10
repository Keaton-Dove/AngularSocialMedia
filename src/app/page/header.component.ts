import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../functionality';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appLogo: string = "assets/asmLogo.png"
  
  constructor(
    private userService: UserService
  ){}

  //@ts-ignore
  user: User;

  ngOnInit(): void {
    this.userService.activeUser
    .subscribe((userData) => this.user = userData);
  }
  
}
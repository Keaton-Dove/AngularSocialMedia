import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './functionality/models';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {
  
  constructor(){}

  createDb() {
    return {
      users: [
        { id: 0, username: "admin", password: "admin", email: "admin@angularsocialmedia.com" },
        { id: 1, username: "keatonD", password: "seminar", email: "kdove8@capital.edu" }
      ],

      posts: [
        { id: 0,
          username: "admin",
          title: "Welcome to AngularSocialMedia", 
          body: "AngularSocialMedia is a revolutionary new social media platform!",
          datePosted: "3/12/2022"},
        { id: 1,
          username: "keatonD",
          title: "Anyone else having trouble with verifying credentials?",
          body: "When I submit a sign-in form I can't figure out a way to verify user credentials",
          datePosted: "3/12/2022"}
      ]
    };
  }

  // generateId(users: User[]): number {
  //   return users.length > 0 ?
  //   Math.max(...users.map(user => user.id)) + 1: 10;
  // }
}

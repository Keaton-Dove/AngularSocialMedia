import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './functionality/models';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {
  
  constructor(){}

  createDb() {
    return {users: [
      { id: 1, username: 'admin', password: 'admin' }
    ]};
    //return {users};
  }

  // generateId(users: User[]): number {
  //   return users.length > 0 ?
  //   Math.max(...users.map(user => user.id)) + 1: 10;
  // }
}

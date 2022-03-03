import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from './http.service';
import { DataService } from './data.service';
import { User } from '../models';

@Injectable()
export class UserService {

    constructor(
        private httpService: HttpService,
        private dataService: DataService
    ) {}

    setAuthorization(user: User) {
        this.dataService.saveData(user.key);
    }

    authorize(formType: String, credentials: any): Observable<User> {
        if (formType == 'sign-in') { return this.sign_in(credentials); }
        else { return this.sign_up(credentials); }
    }
    
    sign_in(credentials: any): Observable<User>{
        return this.httpService.post('/users/sign-in', {user: credentials})
            .pipe(map(data => { this.setAuthorization(data.user); 
                return data; 
            }));
    }
    sign_up(credentials: any): Observable<User>{
        return this.httpService.post('/users', {user: credentials})
            .pipe(map(data => { this.setAuthorization(data.user); 
                return data; 
            }));
    }
}
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';

import { validateSignUp, validateSignIn } from '../validators';

@Injectable()
export class UserService {

    constructor(
        private httpClient: HttpClient,
        private dataService: DataService
    ) {}

    authorize(formType: String, credentials: any): Observable<any>{
        if (formType == 'sign-in') { return this.sign_in(credentials); }
        else { return this.sign_up(credentials); }
    }
    
    sign_in(credentials: any): Observable<User> {
        let err: any = validateSignIn(credentials);
        if (err != null) { return throwError(err); }
            
        return this.httpClient.post<User>('api/users/sign-in/', credentials)
            .pipe(map(data => { return data; }));
     
    }

    sign_up(credentials: any): Observable<User> {
        let err: any = validateSignUp(credentials);
        if (err != null) { return throwError(err); }

        return this.httpClient.post<User>('api/users/', credentials)
            .pipe(map(data => { return data; }));
    }

}
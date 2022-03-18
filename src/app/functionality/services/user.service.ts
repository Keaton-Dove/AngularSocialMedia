import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';

import { UserValidator } from '../validators';

@Injectable()
export class UserService {

    private authenticatedSubject = new ReplaySubject<boolean>(1);
    public authenticated = this.authenticatedSubject.asObservable();
    private activeUserSubject = new BehaviorSubject<User>({} as User);
    public activeUser = this.activeUserSubject.asObservable();

    constructor(
        private httpClient: HttpClient,
        // private dataService: DataService,
        private userValidator: UserValidator
    ) {}
    
    public get activeUserValue(): User {
        return this.activeUserSubject.value;
    }

    authenticateApp(user: User) {
        this.activeUserSubject.next(user);
        this.authenticatedSubject.next(true);
    }

    deauthenticateApp() {
        this.activeUserSubject.next({} as User);
        this.authenticatedSubject.next(false);
    }

    authorize(formType: String, credentials: any): Observable<User>{
        let user: Observable<User>;

        if (formType == 'sign-in') { user = this.sign_in(credentials); }
        else { user = this.sign_up(credentials); }

        return user;
    }
    
    sign_in(credentials: any): Observable<User> {

        let err: any = this.userValidator.validateSignIn(credentials);
        if (err != null) { return throwError(err); }
            
        return this.httpClient.post<User>('api/users/sign-in/', credentials)
            .pipe(map(data => 
            {   
                localStorage.setItem('user', JSON.stringify(data));
                this.authenticateApp(data);
                return data; 
            }));
        
    }

    sign_up(credentials: any): Observable<User> {
        let err: any = this.userValidator.validateSignUp(credentials);
        if (err != null) { return throwError(err); }

        return this.httpClient.post<User>('api/users/', credentials)
            .pipe(map(data => 
            { 
                this.authenticateApp(data);
                return data; 
            }));
    }

}
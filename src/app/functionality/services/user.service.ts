import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { DataService } from './data.service';
import { User } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    constructor(
        private httpClient: HttpClient,
        private httpService: HttpService,
        private dataService: DataService
    ) {}

    authorize(formType: String, credentials: any): Observable<any> {
        if (formType == 'sign-in') { return this.sign_in(credentials); }
        else { return this.sign_up(credentials); }
    }
    
    sign_in(credentials: any): Observable<User> {
        return this.httpClient.post<User>('/users/sign-in/', credentials)
            .pipe(map(data => { return data; }));
    }
    sign_up(credentials: any): Observable<User> {
        return this.httpClient.post<User>('api/users/', credentials)
            .pipe(map(data => { return data; }));
    }
}
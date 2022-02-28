import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from './http.service';
import { DataService } from './data.service';
import { User } from '../models';

@Injectable()
export class UserService {
    
    constructor(
        private httpService: HttpService,
        private dataSerice: DataService
    ) {}

    authorize(credentials: any){
        
    }
}
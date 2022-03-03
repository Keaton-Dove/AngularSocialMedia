import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { DataService } from './data.service';

@Injectable()
export class HttpService {
    
    posts: any;
    rootUrl: string = environment.rootUrl;

    constructor(
        private dataService: DataService,
        private httpClient: HttpClient
    ) {}

    private errorFix(error: any) {
        return throwError(error.error);
    }

    // Building upon HttpClient methods to add functionality specific to ASM
    delete(urlSuffix: string): Observable<any> {
        return this.httpClient.delete(this.rootUrl + urlSuffix)
        .pipe(catchError(throwError));
    } 
    get(urlSuffix: string): Observable<any> {
        return this.httpClient.get(this.rootUrl + urlSuffix)
        .pipe(catchError(throwError));
    }
    post(urlSuffix: string, object: Object = {}): Observable<any> {
        return this.httpClient.post(this.rootUrl + urlSuffix, JSON.stringify(object))
        .pipe(catchError(this.errorFix));

    }
    put(urlSuffix: string, object: Object = {}): Observable<any> {
        return this.httpClient.put(this.rootUrl + urlSuffix, JSON.stringify(object))
        .pipe(catchError(this.errorFix));
    }

}
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    // Building upon HttpClient methods to add functionality specific to ASM
    delete(urlSuffix: string): Observable<any> {
        this.posts = this.httpClient.delete(this.rootUrl + urlSuffix);
        return this.posts;
    } 
    get(urlSuffix: string): Observable<any> {
        this.posts = this.httpClient.get(this.rootUrl + urlSuffix);
        return this.posts;
    }
    post(urlSuffix: string, object: Object = {}): Observable<any> {
        this.posts = this.httpClient.post(this.rootUrl + urlSuffix, Object);
        return this.posts;
    }
    put(urlSuffix: string, object: Object = {}): Observable<any> {
        this.posts = this.httpClient.put(this.rootUrl + urlSuffix, Object);
        return this.posts;
    }

}
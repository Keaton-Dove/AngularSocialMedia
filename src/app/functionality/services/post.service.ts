import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { Post } from '../models';

@Injectable()
export class PostService {
    constructor(
        private httpClient: HttpClient
    ){}
    
    loadPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>('api/posts');
    }
    
    createPost(postContent: any): Observable<Post> {
        return this.httpClient.post<Post>('api/posts/', postContent)
        .pipe(map(data => {
            return data;
        }));
    }
}
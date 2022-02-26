import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    
    getData(): String {
        return window.localStorage['data'];
    }
    saveData(data: String): void {
        window.localStorage['data'] = data;
    }
    deleteData(): void {
        window.localStorage.removeItem('data');
    }
}
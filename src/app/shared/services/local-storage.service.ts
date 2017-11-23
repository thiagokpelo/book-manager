import { Injectable } from '@angular/core';

import { Book } from '../model/book';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalStorageService {

    private key: string;
    localStorage = [];

    constructor() {
        this.key = 'books';

        if (!localStorage[this.key]) {
            localStorage[this.key] = JSON.stringify([]);
        }

        this.localStorage = JSON.parse(localStorage[this.key]);
    }

    getAllItems(): Observable<any> {
        return Observable
            .create(observer => observer.next(this.localStorage));
    }

    getItem(item: any): Observable<any> {
        const selectedItem = this.localStorage.find(b => b.id === item.id);
        return Observable
            .create(observer => observer.next(selectedItem));
    }

    setItem(item: any): Observable<any> {
        this.localStorage.push(item);
        this.updateStorage();

        return Observable
            .create(observer => observer.next(this.localStorage));
    }

    removeItem(item: any): Observable<any> {
        const selectedItem = this.localStorage.find(b => b.id === item.id);
        const index = this.localStorage.indexOf(selectedItem);
        this.localStorage.splice(index, 1);

        this.updateStorage();

        return Observable
            .create(observer => observer.next(this.localStorage));
    }

    updateStorage(): void {
        localStorage[this.key] = JSON.stringify(this.localStorage);
    }

    hasStorage(): boolean {
        return !!(localStorage[this.key] && localStorage[this.key] !== null);
    }
}

import { Injectable } from '@angular/core';

import { Book } from '../model/book';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalStorageService {

    private key: string;
    private localStorage;

    constructor(key: string) {
        this.key = key;

        if (!localStorage[this.key]) {
            localStorage[this.key] = JSON.stringify({items: []});
        }

        this.localStorage = JSON.parse(localStorage[this.key]);
    }

    getAllItems(): Observable<any> {
        return Observable
            .create(observer => observer.next(this.localStorage.items));
    }

    getItem(item: any): Observable<any> {
        const selectedItem = this.localStorage.items.filter(b => b.id === item.id);
        return Observable
            .create(observer => observer.next(selectedItem));
    }

    setItem(item: any): Observable<any> {
        this.localStorage.items.push(item);
        this.updateStorage();

        return Observable
            .create(observer => observer.next(this.localStorage.items));
    }

    removeItem(item: any): Observable<any> {
        const selectedItem = this.localStorage.items.filter(b => b.id === item.id);
        const index = this.localStorage.items.indexOf(selectedItem);

        this.localStorage.items.splice(index, 1);
        this.updateStorage();

        return Observable
            .create(observer => observer.next(this.localStorage.items));
    }

    updateStorage(): void {
        localStorage.setItem(this.key, JSON.stringify(this.localStorage));
    }

    hasStorage(): boolean {
        return !!(localStorage[this.key] && localStorage[this.key] !== null);
    }

}

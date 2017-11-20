import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './../shared/model/book';

const URL = 'https://www.googleapis.com/books/v1/volumes?' +
            'q={search}' +
            '&startIndex={start}' +
            '&maxResults={max}' +
            '&key=AIzaSyDOvQZAOGclFb3iejD1bSL_kAl-ABjZkRg';

@Injectable()
export class BooksService {

    constructor(private http: Http) {}

    search(text: String, max: String, start: String = '0'): Observable<any> {
        return this.http
            .get(`${this.replaceURL(text, max, start)}`)
            .map(res => res.json());
    }

    getBook(id: String) {
        return this.http
            .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .map(res => res.json());
    }

    private replaceURL(text: any, max: any, start: any): String {
        return URL
            .replace('{search}', text)
            .replace('{start}', start)
            .replace('{max}', max)
            .replace(' ', '+');
    }

}

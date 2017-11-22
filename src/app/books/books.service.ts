import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Book } from './../shared/model/book';

const URL        = 'https://www.googleapis.com/books/v1/volumes';
const URL_SEARCH = '?q={search}&startIndex={start}&maxResults={max}';
const URL_KEY    = 'key=AIzaSyDOvQZAOGclFb3iejD1bSL_kAl-ABjZkRg';

@Injectable()
export class BooksService {

    constructor(private http: Http) {}

    search(text: String, max: String = '12', start: number = 0): Observable<any> {
        return this.http
            .get(`${URL}${this.replaceURL(text, max, start)}&${URL_KEY}`)
            .map(res => res.json());
    }

    getBook(id: String): Observable<any> {
        return this.http
            .get(`${URL}/${id}?${URL_KEY}`)
            .map(res => res.json());
    }

    private replaceURL(text: any, max: any, start: any): String {
        return URL_SEARCH
            .replace('{search}', text)
            .replace('{start}', start)
            .replace('{max}', max)
            .replace(' ', '+');
    }

}

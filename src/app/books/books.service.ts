import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Book } from './../shared/model/book';
import { Volume } from '../shared/model/volume';

const URL        = 'https://www.googleapis.com/books/v1/volumes';
const URL_SEARCH = '?q={search}&startIndex={start}&maxResults={max}';
const URL_KEY    = 'key=AIzaSyDOvQZAOGclFb3iejD1bSL_kAl-ABjZkRg';

@Injectable()
export class BooksService {

    constructor(private http: Http) {}

    search(text: String, limit = 12, offset: number = 0): Observable<Volume> {
        return this.http
            .get(`${URL}${this.replaceURL(text, limit, offset)}&${URL_KEY}`)
            .map(volume => new Volume(volume.json()))
    }

    getBook(id: String): Observable<Book> {
        return this.http
            .get(`${URL}/${id}?${URL_KEY}`)
            .map(res => new Book(res.json()));
    }

    private replaceURL(text: any, limit: any, offset: any): String {
        return URL_SEARCH
            .replace('{search}', text)
            .replace('{start}', offset)
            .replace('{max}', limit)
            .replace(' ', '+');
    }
}

import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import * as _ from 'lodash';

import { Book } from './../../shared/model/book';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
    selector: 'app-cards-box',
    templateUrl: './cards-box.component.html',
    styleUrls: ['./cards-box.component.scss']
})
export class CardsBoxComponent implements OnChanges {

    @Input('result')
    private result;

    @Input('searchText')
    private searchText;

    @Output('onChangePage')
    private onChangePage: EventEmitter<any> = new EventEmitter();

    @Output('onChooseBook')
    private onChooseBook: EventEmitter<String> = new EventEmitter();

    private books: Book[];
    private countPage = [12, 24, 36];
    private booksPerPage = 12;
    private realBooks: Book[];
    private localStorage = JSON.parse(localStorage['books']);

    constructor() {}

    ngOnChanges() {
        this.books = this.result ? this.createBooks(this.result.items) : [];
        this.realBooks = _.intersectionBy(this.books, this.localStorage.items, 'id');
        console.log(this.realBooks);
        console.log('------------------------');
        console.log(this.books);
        console.log('------------------------');
        console.log(this.localStorage.items);
    }

    createBooks(items): Array<Book> {
        return items.map(item => new Book(item));
    }

    getPage(page): void {
        this.onChangePage.emit(page);
    }

    getBook(id: string) {
        this.onChooseBook.emit(id);
    }
}

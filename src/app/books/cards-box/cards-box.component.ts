import { Component, OnChanges, Input } from '@angular/core';

import { Book } from './../../shared/model/book';

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

    private books: Book[];

    constructor() {}

    ngOnChanges() {
        this.books = this.result ? this.createBooks(this.result.items) : [];
    }

    createBooks(items) {
        return items.map(item => new Book(item));
    }
}

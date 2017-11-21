import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

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

    @Output('onChangePage')
    private onChangePage: EventEmitter<String> = new EventEmitter();

    private countPage: number[] = [12, 24, 36];
    private books: Book[];

    constructor() {}

    ngOnChanges() {
        this.books = this.result ? this.createBooks(this.result.items) : [];
    }

    createBooks(items): Array<Book> {
        return items.map(item => new Book(item));
    }

    getPage(page: String): void {
        this.onChangePage.emit(page);
    }
}

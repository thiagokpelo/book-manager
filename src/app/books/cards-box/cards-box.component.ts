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
    private onChangePage: EventEmitter<any> = new EventEmitter();

    @Output('onChooseBook')
    private onChooseBook: EventEmitter<String> = new EventEmitter();

    private books: Book[];
    private countPage = [12, 24, 36];
    private booksPerPage = 12;

    constructor() {}

    ngOnChanges() {
        this.books = this.result ? this.createBooks(this.result.items) : [];
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

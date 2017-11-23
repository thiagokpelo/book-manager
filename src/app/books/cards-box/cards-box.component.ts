import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { Book } from './../../shared/model/book';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
    selector: 'app-cards-box',
    templateUrl: './cards-box.component.html',
    styleUrls: ['./cards-box.component.scss']
})
export class CardsBoxComponent implements OnInit {

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
    private localStorage = [];

    constructor(private localStorageService: LocalStorageService) {}

    ngOnInit() {
        if (this.localStorageService.hasStorage()) {
            this.markLikeFavorite();
        }
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

    private markLikeFavorite(): void {
        const _that = this;

        this.localStorageService
            .getAllItems()
            .subscribe(books => {
                this.localStorage = books;

                this.books = this.result ? this.createBooks(this.result.items) : [];

                this.books.forEach((book) => {
                    _that.localStorage.forEach(storage => {
                        if (book['id'] === storage.id) {
                            book['isFavorite'] = true;
                        }
                    });
                });
            });
    }
}

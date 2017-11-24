import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

import { Book } from './../../shared/model/book';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Volume } from '../../shared/model/volume';

@Component({
    selector: 'app-cards-box',
    templateUrl: './cards-box.component.html',
    styleUrls: ['./cards-box.component.scss']
})
export class CardsBoxComponent implements OnInit, OnChanges {

    @Input('result')
    private result: Volume;

    @Input('searchText')
    private searchText: string;

    @Output()
    private onChangePage: EventEmitter<any> = new EventEmitter();

    @Output()
    private onChooseBook: EventEmitter<String> = new EventEmitter();

    private booksPerPage = 12;
    private books: Book[] = [];
    private localStorage: Book[] = [];

    constructor(private localStorageService: LocalStorageService) {
    }

    ngOnInit() {
        this.markLikeFavorite();
    }

    ngOnChanges() {
        this.markLikeFavorite();
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
        if (this.localStorageService.hasStorage()) {
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
}

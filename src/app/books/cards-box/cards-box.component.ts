import { Component, Input, Output, EventEmitter, OnInit, OnChanges, ViewChild } from '@angular/core';

import { Book } from './../../shared/model/book';
import { Volume } from '../../shared/model/volume';
import { Messages } from '../../shared/model/messages';
import { AlertComponent } from './../../shared/alert/alert.component';
import { LocalStorageService } from '../../shared/services/local-storage.service';

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

    @ViewChild(AlertComponent)
    private alert: AlertComponent;

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

    private changeFavorite(obj) {
        this.alert.setSuccess(`${obj.title} ${Messages[obj.type].SUCCESS}`);
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

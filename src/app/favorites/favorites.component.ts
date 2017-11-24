import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BooksService } from './../books/books.service';
import { ModalService } from './../shared/modal/modal.service';
import { LocalStorageService } from '../shared/services/local-storage.service';

import { Book } from '../shared/model/book';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {

    private books: Book[] = [];
    private subscription: Subscription;
    private book: Book;

    constructor(
        private booksService: BooksService,
        private modalService: ModalService,
        private localStorageServices: LocalStorageService
    ) { }

    ngOnInit() {
        if (this.localStorageServices.hasStorage()) {
            this.subscription = this.localStorageServices
                .getAllItems()
                .subscribe(books => this.books = books);
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    getBook(id: string) {
        this.subscription = this.booksService
            .getBook(id)
            .subscribe(res => {
                this.book = new Book(res);
                this.openModal('modalDetails');
            });
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

}

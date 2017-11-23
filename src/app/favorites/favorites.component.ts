import { Component, OnInit } from '@angular/core';
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
export class FavoritesComponent implements OnInit {

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
            this.localStorageServices
                .getAllItems()
                .subscribe(books => this.books = books);
        }
    }

    getBook(id: string) {
        this.subscription = this.booksService
            .getBook(id)
            .subscribe(res => {
                this.book = res;
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

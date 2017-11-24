import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BooksService } from './../books/books.service';
import { ModalService } from './../shared/modal/modal.service';
import { LocalStorageService } from '../shared/services/local-storage.service';

import { Book } from '../shared/model/book';
import { AlertComponent } from '../shared/alert/alert.component';
import { Messages } from '../shared/model/messages';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {

    @ViewChild(AlertComponent)
    private alert: AlertComponent;

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

    getBook(id: string): void {
        this.subscription = this.booksService
            .getBook(id)
            .subscribe(res => {
                this.book = new Book(res);
                this.openModal('modalDetails');
            });
    }

    openModal(id: string): void {
        this.modalService.open(id);
    }

    private changeFavorite(obj): void {
        this.alert.setSuccess(`${obj.title} ${Messages[obj.type].SUCCESS}`);
    }

}

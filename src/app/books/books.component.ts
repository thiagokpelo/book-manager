import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ModalService } from './../shared/modal/modal.service';
import { BooksService } from './books.service';

import { Book } from './../shared/model/book';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    private resultSearch: any;
    private page: string;
    private searchText: string;
    private search: string;
    private book: Book;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        private modalService: ModalService,
        private booksService: BooksService
    ) {}

    ngOnInit() {}

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getBooks(result: any) {
        this.resultSearch = result;
    }

    getPage(page: string) {
        this.page = page;
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

    serchBooks(f: NgForm): void {
        this.searchText = f.value.search;
        this.subscription = this.booksService
            .search(f.value.search, '12', 0)
            .subscribe(res => this.resultSearch = res);
    }
}

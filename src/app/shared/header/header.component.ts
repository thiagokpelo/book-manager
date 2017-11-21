import { Component, OnInit, Output, EventEmitter, Input, OnDestroy, OnChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ISubscription } from 'rxjs/Subscription';

import { BooksService } from './../../books/books.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {

    @Output()
    private onBooks: EventEmitter<any> = new EventEmitter();

    @Input('queryParam')
    private queryParam: String;

    @Input('page')
    private page: Number;

    @ViewChild('f')
    private f: NgForm;

    private searchText: String;
    private search: String;
    private subscription: ISubscription;

    constructor(private booksService: BooksService) {}

    ngOnInit() {}

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnChanges() {
        this.serchBooks(this.f);
    }

    serchBooks(f: NgForm): void {
        const page = +(this.page) * 12;

        this.searchText = f.value.search;
        this.booksService
            .search(f.value.search, '12', page)
            .subscribe((res) => this.onBooks.emit(Object.assign(res, { searchText: f.value.search, maxResults: 12 })));
    }

}

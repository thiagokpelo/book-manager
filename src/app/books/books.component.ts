import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

import { BooksService } from './books.service';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {

    private subscription: ISubscription;
    private resultSearch;
    private queryParam: String;
    private page: String;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.subscription = this.activateRoute.queryParams
            .subscribe((params: Params) => this.queryParam = params.q);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getBooks(result: any) {
        this.resultSearch = result;
    }

    getPage(page: String) {
        this.page = page;
    }
}

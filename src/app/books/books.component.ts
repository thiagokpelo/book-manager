import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BooksService } from './books.service';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

    private resultSearch;

    constructor() {}

    ngOnInit() {
    }

    getBooks(result: any) {
        this.resultSearch = result;
    }
}

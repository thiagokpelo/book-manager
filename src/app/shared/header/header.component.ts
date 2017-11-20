import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BooksService } from './../../books/books.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output()
    private onBooks: EventEmitter<any>;

    private searchText: String;
    private pages: String = '12';

    constructor(private booksService: BooksService) { }

    ngOnInit() {
    }

    serchBooks(f: NgForm): void {
        this.searchText = f.value.search;
        this.booksService.search(this.searchText, this.pages).forEach(res => this.onBooks = res);
    }

}

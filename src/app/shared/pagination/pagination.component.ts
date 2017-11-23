import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

    @Input('booksPerPage')
    private booksPerPage;

    @Input('totalItems')
    private totalItems;

    @Output('onChangePage')
    private onChangePage: EventEmitter<any> = new EventEmitter();

    private pages: Array<any> = [];

    constructor() {}

    ngOnChanges() {
        this.pages = new Array(Math.ceil(this.totalItems / this.booksPerPage));
    }

    changePage(page) {
        this.onChangePage.emit(page);
    }

}

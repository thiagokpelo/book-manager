import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    @Input('maxResults')
    private maxResults: number;

    @Input('totalItems')
    private totalItems: number;

    @Output('onChangePage')
    private onChangePage: EventEmitter<any> = new EventEmitter();

    private pages = [1, 2, 3, 4, 5];

    constructor() {}

    ngOnInit() {}

    changePage(page: number) {
        this.onChangePage.emit(page);
    }

}

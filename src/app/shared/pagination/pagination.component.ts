import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    @Input('maxResults')
    private maxResults;

    @Input('totalItems')
    private totalItems;

    private pages = parseInt(this.totalItems, 10) / parseInt(this.maxResults, 10);

    constructor() { }

    ngOnInit() {
        console.log(this.maxResults);
        console.log(this.totalItems);
        console.log(this.pages);
    }

}

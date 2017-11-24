import { Component, OnInit, Input } from '@angular/core';

import { Book } from './../shared/model/book';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    @Input('book')
    private book: Book;

    constructor() { }

    ngOnInit() { }

}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Book } from './../shared/model/book';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    @Output('onClose')
    private onClose: EventEmitter<any> = new EventEmitter();

    @Input('book')
    private book: Book;

    constructor() { }

    ngOnInit() { }

    close() {
        this.onClose.emit();
    }

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Book } from './../model/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input('book')
    private book: Book;

    @Input('searchText')
    private searchText: String;

    @Output('onGetBookId')
    private onGetBookId: EventEmitter<String> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    private createMarkHighlight(text: String) {
        let src_str = text;
        let term = this.searchText;

        term = term ? term.replace(/(\s+)/, '(<[^>]+>)*$1(<[^>]+>)*') : '';
        const pattern = new RegExp('(' + term + ')', 'gi');

        src_str = src_str ? src_str.replace(pattern, '<mark>$1</mark>') : '';
        src_str = src_str ? src_str.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/, '$1</mark>$2<mark>$4') : '';

        return src_str;
    }

    getBook(id: string): void {
        this.onGetBookId.emit(id);
    }

}

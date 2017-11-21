import { Component, OnInit, Input } from '@angular/core';

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

}

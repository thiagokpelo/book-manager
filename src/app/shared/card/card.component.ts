import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';

import { LocalStorageService } from '../services/local-storage.service';

import { Book } from './../model/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input('book')
    private book: Book;

    @Input('favoriteChecked')
    private favoriteChecked: boolean;

    @Input('searchText')
    private searchText: String;

    @Output('onGetBookId')
    private onGetBookId: EventEmitter<String> = new EventEmitter();

    private localStorageService: LocalStorageService = new LocalStorageService('books');

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

    changeFavorite(book: Book) {
        this.favoriteChecked = !this.favoriteChecked;

        if (this.favoriteChecked) {
            this.localStorageService.setItem(book).subscribe(res => console.log('SetItem: ', res), err => console.error('SetItem: ', err));
        } else {
            this.localStorageService.removeItem(book).subscribe(res => (
                console.log('RemoveItem:', res), err => console.error('RemoveItem:', err)));
        }
    }

}

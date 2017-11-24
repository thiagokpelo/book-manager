import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output,
    ViewChild,
    ElementRef,
    OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LocalStorageService } from '../services/local-storage.service';
import { AlertComponent } from '../alert/alert.component';
import { Book } from './../model/book';
import { Types, Messages } from '../model/messages';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

    @Input()
    private book: Book;

    @Input()
    private favoriteChecked: boolean;

    @Input()
    private searchText: String;

    @Output()
    private onGetBookId: EventEmitter<String> = new EventEmitter();

    @Output()
    private onChangeFavorite: EventEmitter<any> = new EventEmitter();

    private subscription: Subscription;
    private message: string;
    private type: string;

    constructor(
        private localStorageService: LocalStorageService,
        private el: ElementRef
    ) { }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    getBook(id: string): void {
        this.onGetBookId.emit(id);
    }

    changeFavorite(book: Book): void {
        this.favoriteChecked = !this.favoriteChecked;

        this.subscription = this.favoriteChecked
            ? this.localStorageService
                .setItem(book)
                .subscribe(() => this.onChangeFavorite.emit({ title: book.volumeInfo['title'], type: 'ADDED' }))
            : this.localStorageService
                .removeItem(book)
                .subscribe(() => this.onChangeFavorite.emit({ title: book.volumeInfo['title'], type: 'DELETED' }));
    }

    private createMarkHighlight(text: string): string {
        let src_str = text;
        let term = this.searchText;

        term = term ? term.replace(/(\s+)/, '(<[^>]+>)*$1(<[^>]+>)*') : '';
        const pattern = new RegExp('(' + term + ')', 'gi');

        src_str = src_str ? src_str.replace(pattern, '<mark>$1</mark>') : '';
        src_str = src_str ? src_str.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/, '$1</mark>$2<mark>$4') : '';

        return src_str;
    }

}

import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output,
    ViewChild,
    ElementRef
} from '@angular/core';

import { LocalStorageService } from '../services/local-storage.service';

import { Book } from './../model/book';

import { AlertComponent } from '../alert/alert.component';
import { Types, Messages } from '../model/messages';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @ViewChild(AlertComponent)
    private alert: AlertComponent;

    @Input()
    private book: Book;

    @Input()
    private favoriteChecked: boolean;

    @Input()
    private searchText: String;

    @Output()
    private onGetBookId: EventEmitter<String> = new EventEmitter();

    private message: string;
    private type: string;

    constructor(
        private localStorageService: LocalStorageService,
        private el: ElementRef
    ) { }

    ngOnInit() {
    }

    getBook(id: string): void {
        this.onGetBookId.emit(id);
    }

    changeFavorite(book: Book): void {
        this.favoriteChecked = !this.favoriteChecked;

        this.favoriteChecked
            ? this.localStorageService
                .setItem(book)
                .subscribe(() => (
                    this.alertShow(Types.SUCCESS, Messages.ADDED.SUCCESS)), () => this.alertShow(Types.ERROR, Messages.ADDED.ERROR))
            : this.localStorageService
                .removeItem(book)
                .subscribe(() => (
                    this.alertShow(Types.SUCCESS, Messages.DELETED.SUCCESS)), () => this.alertShow(Types.ERROR, Messages.DELETED.ERROR));
    }

    private alertShow(type: string, message: string): void {
        this.type = type;
        this.message = message;
        this.alert.show();
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

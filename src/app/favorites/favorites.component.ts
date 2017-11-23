import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../shared/services/local-storage.service';

import { Book } from '../shared/model/book';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

    @Input('book')
    private book;

    private localStorageServices: LocalStorageService = new LocalStorageService('books');
    private books = [];

    constructor() { }

    ngOnInit() {
        if (this.localStorageServices.hasStorage()) {
            this.localStorageServices.getAllItems().subscribe(books => this.books = books);
        }

        console.log(this.books);
    }

}

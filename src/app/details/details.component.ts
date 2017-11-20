import { BooksService } from './../books/books.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Book } from './../shared/model/book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    private bookId: String;
    private book: Book;

    constructor(
        private booksService: BooksService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe((params: Params) => this.bookId = params.id);
      this.booksService.getBook(this.bookId).forEach(res => this.book = res);
  }

  goBack() {
      this.router.navigate(['/books']);
  }

}

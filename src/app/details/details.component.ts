import { BooksService } from './../books/books.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

import { Book } from './../shared/model/book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

    private bookId: String;
    private book: Book;
    private subscription: ISubscription;

    constructor(
        private booksService: BooksService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

  ngOnInit() {
      this.subscription = this.activatedRoute.params
          .subscribe((params: Params) => this.bookId = params.id);
      this.booksService.getBook(this.bookId).forEach(res => this.book = res);
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  goBack() {
      this.router.navigate(['/books']);
  }

}

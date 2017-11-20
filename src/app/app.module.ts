import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { BooksService } from './books/books.service';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CardComponent } from './shared/card/card.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { CardsBoxComponent } from './books/cards-box/cards-box.component';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        BooksComponent,
        DetailsComponent,
        ErrorComponent,
        PaginationComponent,
        CardsBoxComponent,
        HeaderComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        BooksService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

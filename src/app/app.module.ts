import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalService } from './shared/modal/modal.service';
import { BooksService } from './books/books.service';
import { LocalStorageService } from './shared/services/local-storage.service';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CardComponent } from './shared/card/card.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { CardsBoxComponent } from './books/cards-box/cards-box.component';
import { ModalComponent } from './shared/modal/modal.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AlertComponent } from './shared/alert/alert.component';


@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        BooksComponent,
        DetailsComponent,
        ErrorComponent,
        PaginationComponent,
        CardsBoxComponent,
        ModalComponent,
        FavoritesComponent,
        AlertComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [
        BooksService,
        ModalService,
        LocalStorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

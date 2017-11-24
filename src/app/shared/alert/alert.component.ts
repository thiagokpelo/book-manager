import { timeout } from 'q';
import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    animations: [
        trigger('visibilityChanged', [
            state('shown' , style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('* => *', animate('.5s'))
        ])
    ]
})
export class AlertComponent {

    private visiblityState = 'hidden';
    private classError = false;
    private classSuccess = false;
    private classWarning = false;
    private message: string;
    private timeout;

    constructor() { }

    setSuccess(message: string) {
        this.classSuccess = true;
        this.classError = false;
        this.classWarning = false;

        this.create(message);
    }

    setWarning(message: string) {
        this.classWarning = true;
        this.classError = false;
        this.classSuccess = false;

        this.create(message);
    }

    setError(error: string) {
        this.classError = true;
        this.classWarning = false;
        this.classSuccess = false;

        this.create(error);
    }

    clean() {
        this.visiblityState = 'hidden';
        this.classWarning = false;
        this.classError = false;
        this.classSuccess = false;
        this.message = '';
    }

    private create(message: string) {
        this.visiblityState = 'shown';
        this.setMessage(message);
        this.rebuildTimeoutClean();
    }

    private setMessage(message: string) {
        this.message = message;
    }

    private setTimeoutClean() {
        this.timeout = setTimeout(() => this.clean(), 3000);
    }

    private cancelTimeoutClean() {
        clearTimeout(this.timeout);
    }

    private rebuildTimeoutClean() {
        this.cancelTimeoutClean();
        this.setTimeoutClean();
    }
}

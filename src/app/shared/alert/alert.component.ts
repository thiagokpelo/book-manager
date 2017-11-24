import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

    @Input()
    private type: string;

    @Input()
    private message: string;

    @Input()
    private title: string;

    constructor(private element: ElementRef) { }

    ngOnInit() {
    }

    show(): void {
        this.element.nativeElement.classList.add('active');
    }

    hide(): void {
        this.element.nativeElement.classList.remove('active');
    }

}

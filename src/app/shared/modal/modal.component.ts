import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit, OnDestroy {

    @Input() id: string;
    private element: ElementRef;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el;
    }

    ngOnInit(): void {
        const modal = this;

        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.nativeElement.remove();
    }

    private open(): void {
        this.element.nativeElement.style.display = 'block';
        this.element.nativeElement.style.opacity = '1';
        this.el.nativeElement.closest('body').classList.add('modal-open');
    }

    private close(): void {
        this.element.nativeElement.style.display = 'none';
        this.element.nativeElement.style.opacity = '0';
        this.el.nativeElement.closest('body').classList.remove('modal-open');
    }
}

import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-modal',
    template: '<ng-content></ng-content>',
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

        const $body = this.el.nativeElement.closest('body');
        $body.insertAdjacentHTML('beforeend', this.element.nativeElement);

        this.element.nativeElement.addEventListener('click', function (e: any) {
            const target = e.target;
            if (!target.closest('.modal-body').length) {
                modal.close();
            }
        });

        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.nativeElement.remove();
    }

    open(): void {
        this.element.nativeElement.style.display = 'block';
        this.element.nativeElement.style.opacity = '1';
        this.el.nativeElement.closest('body').classList.add('modal-open');
    }

    close(): void {
        this.element.nativeElement.style.display = 'none';
        this.el.nativeElement.closest('body').classList.remove('modal-open');
    }
}

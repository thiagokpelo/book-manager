import { ModalComponent } from './modal.component';
import * as _ from 'lodash';

export class ModalService {
    private modals: ModalComponent[] = [];

    add(modal: any) {
        this.modals.push(modal);
    }

    remove(id: string) {
        const modalToRemove = _.find(this.modals, { id: id });
        this.modals = _.without(this.modals, modalToRemove);
    }

    open(id: string) {
        console.log('service');
        const modal = _.find(this.modals, { id: id });
        modal.open();
    }

    close(id: string) {
        const modal = _.find(this.modals, { id: id });
        modal.close();
    }
}

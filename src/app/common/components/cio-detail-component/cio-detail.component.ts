import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'cio-detail-component',
    templateUrl: 'cio-detail.component.html',
    styleUrls: ['cio-detail.component.scss']
})

export class CioDetailComponent {
    @Input() detailModalData: any;
    constructor(private modalController: ModalController) {
    }

    dismissModal(event) {
        this.modalController.dismiss();
    }

}

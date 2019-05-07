import { CioDetailComponent } from './../cio-detail-component/cio-detail.component';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'cio-survey-body',
    templateUrl: 'cio-survey-body.component.html',
    styleUrls: ['cio-survey-body.component.scss']
})

export class CioSurveyBodyComponent {
    @Input() cardBodyData: any;
    constructor(private modalController: ModalController) {
    }

    async displaySurveyDetailsModal() {
        console.log('display details modal---');
        const detailModal = await this.modalController.create({
            component: CioDetailComponent,
            componentProps: { detailModalData: this.cardBodyData }
        });
        return await detailModal.present();
    }
}

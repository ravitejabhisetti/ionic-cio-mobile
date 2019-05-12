import { UserCommonService } from './../../../store/services/user-common.service';
import { CioDetailComponent } from './../cio-detail-component/cio-detail.component';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SurveyService } from '../../../pages/survey/shared/services/survey-services';

@Component({
    selector: 'cio-survey-body',
    templateUrl: 'cio-survey-body.component.html',
    styleUrls: ['cio-survey-body.component.scss']
})

export class CioSurveyBodyComponent {
    @Input() cardBodyData: any;
    @Input() surveyIndex = null;
    @Input() activeModalDataArray: any = [];
    constructor(private modalController: ModalController, private surveyService: SurveyService,
        private userCommonService: UserCommonService) {
    }

    async displaySurveyDetailsModal() {
        this.userCommonService.updateModalData(this.cardBodyData, this.surveyIndex);
        const detailModal = await this.modalController.create({
            component: CioDetailComponent,
            componentProps: { type: 'surveys', activeModalDataArray: this.activeModalDataArray }
        });
        return await detailModal.present();
    }
}

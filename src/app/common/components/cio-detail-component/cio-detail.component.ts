import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { SurveyService } from '../../../pages/survey/shared/services/survey-services';
import { UserCommonService } from '../../../store/services/user-common.service';

@Component({
    selector: 'cio-detail-component',
    templateUrl: 'cio-detail.component.html',
    styleUrls: ['cio-detail.component.scss']
})

export class CioDetailComponent implements OnInit {
    detailModalData: any;
    @Input() type = '';
    @Input() activeModalDataArray = null;
    enableBackButton = false;
    enableNextButton = false;
    selectedModalItemIndex = null;
    constructor(private modalController: ModalController, private surveyService: SurveyService,
        private userCommonSservice: UserCommonService) {
    }

    ngOnInit() {
        this.userCommonSservice.getModalData().subscribe((modalData) => {
            if (modalData) {
                this.detailModalData = modalData.modalItem;
                this.selectedModalItemIndex = modalData.modalItemIndex;
            }
            if ((Number(this.selectedModalItemIndex) > 0) &&
                Number(this.selectedModalItemIndex) < this.activeModalDataArray.length) {
                this.enableBackButton = true;
            } else {
                this.enableBackButton = false;
            }
            if ((Number(this.selectedModalItemIndex) < this.activeModalDataArray.length - 1)) {
                this.enableNextButton = true;
            } else {
                this.enableNextButton = false;
            }
        });
    }

    dismissModal(event) {
        this.modalController.dismiss();
    }

    updateBackModalData() {
        this.userCommonSservice.updateModalData(this.activeModalDataArray[Number(this.selectedModalItemIndex) - 1],
            Number(this.selectedModalItemIndex) - 1);
    }

    updateNextModalData() {
        this.userCommonSservice.updateModalData(this.activeModalDataArray[Number(this.selectedModalItemIndex) + 1],
            Number(this.selectedModalItemIndex) + 1);
    }

}

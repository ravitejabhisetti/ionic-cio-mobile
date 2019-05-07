import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cio-survey-header',
    templateUrl: 'cio-survey-header.component.html',
    styleUrls: ['cio-survey-header.component.scss']
})

export class CioSurveyHeaderComponent {
    @Input() cardHeaderData: any;
    @Input() detailPageHeader = false;
    @Output() dismissDetailModal = new EventEmitter();

    dismissModal(event) {
        this.dismissDetailModal.emit();
    }
}

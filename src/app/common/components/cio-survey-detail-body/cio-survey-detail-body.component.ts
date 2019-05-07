import { Component, Input } from '@angular/core';

@Component({
    selector: 'cio-survey-detail-body',
    templateUrl: 'cio-survey-detail-body.component.html',
    styleUrls: ['cio-survey-detail-body.component.scss']
})

export class CioSurveyDetailBody {
    @Input() surveyDetailBodyData: any;
}

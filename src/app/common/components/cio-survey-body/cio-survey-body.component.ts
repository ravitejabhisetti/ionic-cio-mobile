import { Component, Input } from '@angular/core';

@Component({
    selector: 'cio-survey-body',
    templateUrl: 'cio-survey-body.component.html',
    styleUrls: ['cio-survey-body.component.scss']
})

export class CioSurveyBodyComponent {
    @Input() cardBodyData: any;
}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'cio-survey-header',
    templateUrl: 'cio-survey-header.component.html',
    styleUrls: ['cio-survey-header.component.scss']
})

export class CioSurveyHeaderComponent {
    @Input() cardHeaderData: any;
}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'cio-survey-header',
    templateUrl: 'cio-survey-header.component.html'
})

export class CioSurveyHeaderComponent {
    @Input() cardHeaderData: any;
}

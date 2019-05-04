import { Component, Input } from '@angular/core';

@Component({
    selector: 'cio-survey-body',
    templateUrl: 'cio-survey-body.component.html'
})

export class CioSurveyBodyComponent {
    @Input() cardBodyData: any;
}

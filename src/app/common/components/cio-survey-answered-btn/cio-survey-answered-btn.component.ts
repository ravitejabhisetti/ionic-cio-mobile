import { Component, Input } from '@angular/core';

@Component({
    selector: 'cio-survey-answered-btn',
    templateUrl: 'cio-survey-answered-btn.component.html',
    styleUrls: ['cio-survey-answered-btn.component.scss']
})

export class CioSurveyAnsweredButton {
    @Input() option = '';
    @Input() optionName = '';
    @Input() surveyDetailBodyData: any;
    @Input() quesPercentAnswered = null;
    @Input() optionIndex = null;
}

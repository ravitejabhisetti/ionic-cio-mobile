import { Component, Input } from '@angular/core';

@Component({
    selector: 'cio-survey-ques-button',
    templateUrl: 'cio-survey-ques-button.component.html',
    styleUrls: ['cio-survey-ques-button.component.scss']
})

export class CioSurveyQuesButtonComponent {
    @Input() surveyDetailBodyData: any;
    buttonSelected = null;
    enableSubmit = null;

    getOption(index) {
        return String.fromCharCode(97 + index).toUpperCase();
    }

    selectOption(index) {
        this.buttonSelected = index;
        this.enableSubmit = true;
    }
}

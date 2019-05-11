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
        if (!(Number(this.buttonSelected) === Number(index)) || this.buttonSelected === null) {
            this.buttonSelected = index;
            this.enableSubmit = true;
        } else {
            this.buttonSelected = null;
            this.enableSubmit = false;
        }
    }

    getPercent(index) {
        let totalCount = 0;
        for (let i = 0; i < this.surveyDetailBodyData.questions[0].counts.length; i++) {
            totalCount = totalCount + this.surveyDetailBodyData.questions[0].counts[i];
        }
        const percent = Number((this.surveyDetailBodyData.questions[0].counts[index] / totalCount) * 100).toFixed(2);
        const percentString = String(percent) + '%';
        return percentString;
    }
}

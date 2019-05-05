import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../shared/services/survey-services';

@Component({
    selector: 'trivia-surveys',
    templateUrl: 'trivia-surveys.component.html'
})

export class TriviaSurveysComponent implements OnInit {
    showEmptyComponent = true;
    triviaSurveys$: Observable<any[]>;
    constructor(private surveyService: SurveyService) {
    }

    ngOnInit() {
        this.triviaSurveys$ = this.surveyService.getTriviaSurveys();
        this.triviaSurveys$.subscribe((triviaResponse) => {
            this.showEmptyComponent = false;
        });
    }
}

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
    getSurveyDataLoadedStatus$: Observable<boolean>;
    constructor(private surveyService: SurveyService) {
    }

    ngOnInit() {
        this.triviaSurveys$ = this.surveyService.getTriviaSurveys();
        this.getSurveyDataLoadedStatus$ = this.surveyService.getSurveyDataLoadedStatus();
        this.triviaSurveys$.subscribe((triviaResponse) => {
            this.showEmptyComponent = false;
        });
    }
    doRefresh(event) {
        this.surveyService.getSurveyData(false);
        this.getSurveyDataLoadedStatus$.subscribe((dataStauts) => {
            if (dataStauts) {
                event.target.complete();
            }
        });
    }
}

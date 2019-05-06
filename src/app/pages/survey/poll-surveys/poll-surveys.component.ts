import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../shared/services/survey-services';

@Component({
    selector: 'poll-surveys',
    templateUrl: 'poll-surveys.component.html'
})

export class PollSurveysComponent implements OnInit {
    pollSurveys$: Observable<any[]>;
    showEmptyComponent = true;
    getSurveyDataLoadedStatus$: Observable<boolean>;
    constructor(private surveyService: SurveyService) { }
    ngOnInit() {
        this.pollSurveys$ = this.surveyService.getPollSurveys();
        this.getSurveyDataLoadedStatus$ = this.surveyService.getSurveyDataLoadedStatus();
        this.pollSurveys$.subscribe((pollResponse) => {
            console.log('poll survey response ----', pollResponse);
            if (pollResponse) {
                this.showEmptyComponent = false;
            } else {
                this.showEmptyComponent = true;
            }
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

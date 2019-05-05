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
    constructor(private surveyService: SurveyService) { }
    ngOnInit() {
        this.pollSurveys$ = this.surveyService.getPollSurveys();
        this.pollSurveys$.subscribe((pollResponse) => {
            console.log('poll survey response ----', pollResponse);
            this.showEmptyComponent = false;
        });
    }
}

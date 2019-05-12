import { UserCommonService } from './../../../store/services/user-common.service';
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
    pollSurveysList = [];
    constructor(private surveyService: SurveyService, private userCommonService: UserCommonService) { }
    ngOnInit() {
        this.pollSurveys$ = this.surveyService.getPollSurveys();
        this.getSurveyDataLoadedStatus$ = this.surveyService.getSurveyDataLoadedStatus();
        this.pollSurveys$.subscribe((pollResponse) => {
            console.log('poll survey response ----', pollResponse);
            if (pollResponse && pollResponse.length > 0) {
                this.showEmptyComponent = false;
                this.pollSurveysList = pollResponse;
                this.updateActiveSurveysList(pollResponse);
            } else {
                this.showEmptyComponent = true;
                this.pollSurveysList = [];
                this.updateActiveSurveysList([]);
            }
        });
    }
    ionViewDidEnter() {
        this.updateActiveSurveysList(this.pollSurveysList);
    }

    updateActiveSurveysList(surveysList) {
        this.userCommonService.updateModalDataArray(surveysList);
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

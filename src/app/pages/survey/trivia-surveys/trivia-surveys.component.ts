import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../shared/services/survey-services';
import { UserCommonService } from '../../../store/services/user-common.service';

@Component({
    selector: 'trivia-surveys',
    templateUrl: 'trivia-surveys.component.html'
})

export class TriviaSurveysComponent implements OnInit {
    showEmptyComponent = true;
    triviaSurveys$: Observable<any[]>;
    getSurveyDataLoadedStatus$: Observable<boolean>;
    triviaSurveysList = [];
    constructor(private surveyService: SurveyService, private userCommonService: UserCommonService) {
    }

    ngOnInit() {
        this.triviaSurveys$ = this.surveyService.getTriviaSurveys();
        this.getSurveyDataLoadedStatus$ = this.surveyService.getSurveyDataLoadedStatus();
        this.triviaSurveys$.subscribe((triviaResponse) => {
            if (triviaResponse && triviaResponse.length > 0) {
                this.showEmptyComponent = false;
                this.triviaSurveysList = triviaResponse;
                this.updateActiveSurveysList(triviaResponse);
            } else {
                this.showEmptyComponent = true;
                this.triviaSurveysList = [];
                this.updateActiveSurveysList([]);
            }
        });
    }

    ionViewDidEnter() {
        this.updateActiveSurveysList(this.triviaSurveysList);
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

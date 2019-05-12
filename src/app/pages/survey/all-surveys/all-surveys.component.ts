import { UserCommonService } from './../../../store/services/user-common.service';
import { SurveyService } from './../shared/services/survey-services';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'all-surveys',
    templateUrl: 'all-surveys.component.html'
})

export class AllSurveysComponent implements OnInit {
    allSurveys$: Observable<any[]>;
    showEmptyComponent = true;
    getSurveyDataLoadedStatus$: Observable<boolean>;
    allSurveysList = [];
    constructor(private surveyService: SurveyService, private userCommonService: UserCommonService) { }
    ngOnInit() {
        this.allSurveys$ = this.surveyService.getAllSurveys();
        this.getSurveyDataLoadedStatus$ = this.surveyService.getSurveyDataLoadedStatus();
        this.allSurveys$.subscribe((res) => {
            console.log('res to check is---', res);
            if (res && res.length > 0) {
                this.showEmptyComponent = false;
                this.allSurveysList = res;
                this.updateActiveSurveysList(res);
            } else {
                this.showEmptyComponent = true;
                this.allSurveysList = [];
                this.updateActiveSurveysList([]);
            }
        });
    }
    ionViewDidEnter() {
        this.updateActiveSurveysList(this.allSurveysList);
    }

    updateActiveSurveysList(surveysList) {
        this.userCommonService.updateModalDataArray(surveysList);
    }

    doRefresh(event: any) {
        this.surveyService.getSurveyData(false);
        this.getSurveyDataLoadedStatus$.subscribe((dataStauts) => {
            if (dataStauts) {
                event.target.complete();
            }
        });
    }
}

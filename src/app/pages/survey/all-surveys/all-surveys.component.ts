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
    constructor(private surveyService: SurveyService) { }
    ngOnInit() {
        this.allSurveys$ = this.surveyService.getAllSurveys();
        this.getSurveyDataLoadedStatus$ = this.surveyService.getSurveyDataLoadedStatus();
        this.allSurveys$.subscribe((res) => {
            console.log('res to check is---', res);
            if (res) {
                this.showEmptyComponent = false;
            } else {
                this.showEmptyComponent = true;
            }
        });
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

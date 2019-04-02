import { SurveyService } from './../shared/services/survey-services';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'all-surveys',
    templateUrl: 'all-surveys.component.html'
})

export class AllSurveysComponent implements OnInit {
    allSurveys$: Observable<any[]>;
    constructor(private surveyService: SurveyService) { }
    ngOnInit() {
        console.log('in ion view download----');
        this.allSurveys$ = this.surveyService.getAllSurveys();
        this.allSurveys$.subscribe((res) => {
            console.log('res to check is---', res);
        });
    }
}

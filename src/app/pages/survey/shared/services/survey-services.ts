import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SurveyModuleState } from '../models';
import { SurveyActions } from '../actions';
import { getSurveyData } from '../reducers';

@Injectable()
export class SurveyService {
    constructor(private store: Store<SurveyModuleState>) { }

    getSurveyData(loader) {
        this.store.dispatch(new SurveyActions.GetSurveyData(loader));
    }

    getAllSurveys() {
        console.log('check all surveys---', this.store.select(getSurveyData));
       return this.store.select(getSurveyData);
    }
}

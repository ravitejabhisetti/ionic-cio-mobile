import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SurveyModuleState } from '../models';
import { SurveyActions } from '../actions';
import { getSurveyData, getPollSurveyData, getTriviaSurveyData } from '../reducers';

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

    getPollSurveys() {
        console.log('check poll surveys---', this.store.select(getPollSurveyData));
        return this.store.select(getPollSurveyData);
    }

    getTriviaSurveys() {
        return this.store.select(getTriviaSurveyData);
    }
}

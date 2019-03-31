import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SurveyModuleState } from '../models';
import { SurveyActions } from '../actions';

@Injectable()
export class SurveyService {
    constructor(private store: Store<SurveyModuleState>) { }

    getSurveyData(loader) {
        this.store.dispatch(new SurveyActions.GetSurveyData(loader));
    }
}

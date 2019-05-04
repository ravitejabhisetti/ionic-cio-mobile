import { Events } from '@ionic/angular';
import { SurveyHttpService } from './../services/survey-http-services';
import { SurveyModuleState } from './../models/index';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { SurveyActions } from '../actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import * as constants from '../../../../common/core/cio-constants';

@Injectable()
export class SurveyEffects {
    @Effect()
    getSurveyData$ = this.action$
        .pipe(
            ofType(SurveyActions.GET_SURVEY),
            map((action: SurveyActions.GetSurveyData) => action.payload),
            switchMap((payload) => {
                return this.getSurveyData(payload).pipe(catchError((error) => {
                    return of(new SurveyActions.GetSurveyFail(error));
                }));
            })
        );
    constructor(
        private action$: Actions,
        private store$: Store<SurveyModuleState>,
        private surveyHttpService: SurveyHttpService,
        private events: Events
    ) { }

    getSurveyDataObservable$(loader) {
        if (loader) {
            this.events.publish(constants.handle_loader, { showLoader: true, loaderMessage: constants.loading_data_message });
        }
        return this.surveyHttpService.getSurveyData().pipe(
            map((data) => {
                this.events.publish(constants.handle_loader, { showLoader: false });
                return new SurveyActions.GetSurveySuccess(this.formatSurveyResponse(data));
            }),
            catchError((error) => {
                this.events.publish(constants.handle_loader, { showLoader: false });
                return throwError(error);
            }));
    }

    getSurveyData(loader) {
        return this.getSurveyDataObservable$(loader).pipe(catchError((error) => {
            return throwError(error);
        }));
    }

    formatSurveyResponse(data: any) {
        for (let i = 0; i < data.length; i++) {
            data[i].surveyStatus = data[i].answered ? 'Closed' : 'Open';
            data[i].surveyType = data[i].questions[0].counts ? 'Poll' : 'Trivia';
            data[i].expiryDateToDisplay = this.getExpiryDate(data[i]);
        }
        return data;
    }

    getExpiryDate(data) {
        const dateone: any = new Date(data.createdOn);
        const datetwo: any = new Date(data.expiryDate);
        return Math.round((datetwo - dateone) / 1000 / 60 / 60 / 24);
    }
}

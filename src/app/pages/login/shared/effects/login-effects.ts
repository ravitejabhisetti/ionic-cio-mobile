import { Events } from '@ionic/angular';
import { LoginModuleState, loginResponse } from './../models/index';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LoginHttpService } from '../services/login-http-services';
import { LoginActions } from '../actions';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import * as constants from '../../../../common/core/cio-constants';

@Injectable()
export class LoginEffects {

    @Effect()
    getToken$ = this.action$
        .pipe(
            ofType(LoginActions.GET_TOKEN),
            map((action: LoginActions.GetLoginToken) => action.payload),
            tap((payload) => console.log(payload)),
            switchMap(() => {
                return this.getLoginToken().pipe(catchError((error) => {
                    return of(new LoginActions.GetLoginTokenFail());
                }))
            })
        )
    constructor(
        private action$: Actions,
        private store: Store<LoginModuleState>,
        private loginHttpService: LoginHttpService,
        private events: Events,
        private storage: Storage
    ) { }

    getLoginTokenObservable$() {
        this.events.publish(constants.handle_loader, { showLoader: true, loaderMessage: constants.login_loader_message });
        return this.loginHttpService.getLoginToken().pipe(
            map((data: any) => {
                this.storage.set(constants.login_token, data.id_token);
                this.events.publish(constants.cio_login_success);
                this.events.publish(constants.handle_loader, { showLoader: false });
                return new LoginActions.GetLoginTokenSuccess(data.id_token);
            }),
            catchError((error) => {
                this.events.publish(constants.handle_loader, { showLoader: false });
                return throwError(error);
            }))
    }

    getLoginToken() {
        return this.getLoginTokenObservable$().pipe(catchError((error: any) => {
            return throwError(error);
        }))
    }
}
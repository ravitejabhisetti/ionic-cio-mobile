import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { LoginModuleState } from '../models';
import { LoginActions } from '../actions';

@Injectable()
export class LoginService {
    constructor(private store: Store<LoginModuleState>) { }

    getToken() {
        this.store.dispatch(new LoginActions.GetLoginToken());
    }
}

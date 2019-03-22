import { CioAppApiService } from './../../../../common/services/cio-app-api-services';
import { Injectable } from '@angular/core';
import * as constants from '../../../../common/core/cio-constants';

@Injectable()
export class LoginHttpService {
    constructor(private cioAppApiService: CioAppApiService) { }

    getLoginToken() {
        return this.cioAppApiService.get(constants.loginPath).map((res) => {
            return res;
        })
    }
}
import { CioAppApiService } from './../../../../common/services/cio-app-api-services';
import { Injectable } from '@angular/core';
import * as constants from '../../../../common/core/cio-constants';

@Injectable()
export class SurveyHttpService {
    constructor(private cioAppApiService: CioAppApiService) { }

    getSurveyData() {
        return this.cioAppApiService.get(constants.surveyPath).map((res) => {
            return res;
        });
    }
}

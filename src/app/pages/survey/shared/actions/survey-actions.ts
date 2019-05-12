import { Action } from '@ngrx/store';

export const GET_SURVEY = '[Survey] Get Survey';
export const GET_SURVEY_SUCCESS = '[Survey] Get Survey Success';
export const GET_SURVEY_FAIL = '[Survey] Get Survey Fail';
export const GET_SELECTED_SURVEY_MODAL_DATA = '[Survey] Get Selected Survey Modal Data';
export const UPDATE_ACTIVE_SURVEYS_LIST = '[Survey] Update Active Surveys List';

export class GetSurveyData implements Action {
    readonly type = GET_SURVEY;
    constructor(public payload: any) { }
}

export class GetSurveySuccess implements Action {
    readonly type = GET_SURVEY_SUCCESS;
    constructor(public payload: any) { }
}

export class GetSurveyFail implements Action {
    readonly type = GET_SURVEY_FAIL;
    constructor(public payload: any) { }
}

export class GetSelectedSurveyModalData implements Action {
    readonly type = GET_SELECTED_SURVEY_MODAL_DATA;
    constructor(public payload: any) { }
}

export class UpdateActiveSurveysList implements Action {
    readonly type = UPDATE_ACTIVE_SURVEYS_LIST;
    constructor(public payload: any) { }
}

export type All =
    | UpdateActiveSurveysList
    | GetSelectedSurveyModalData
    | GetSurveyData
    | GetSurveySuccess
    | GetSurveyFail;


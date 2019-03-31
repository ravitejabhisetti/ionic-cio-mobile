import { Action } from '@ngrx/store';

export const GET_SURVEY = '[Survey] Get Survey';
export const GET_SURVEY_SUCCESS = '[Survey] Get Survey Success';
export const GET_SURVEY_FAIL = '[Survey] Get Survey Fail';

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

export type All =
    | GetSurveyData
    | GetSurveySuccess
    | GetSurveyFail;


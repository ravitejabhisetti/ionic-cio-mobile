import { Action } from '@ngrx/store';

export const GET_TOKEN = '[Login] Get Login Token';
export const GET_TOKEN_SUCCESS = '[Login] Get Login Token Success';
export const GET_TOKEN_FAIL = '[Login] get Login Token Fail';

export class GetLoginToken implements Action {
    readonly type = GET_TOKEN;
    constructor(public payload = null) { }
}

export class GetLoginTokenSuccess implements Action {
    readonly type = GET_TOKEN_SUCCESS;
    constructor(public payload: any) { }
}

export class GetLoginTokenFail implements Action {
    readonly type = GET_TOKEN_FAIL;
    constructor(public payload: any = null) { }
}

export type All =
    | GetLoginToken
    | GetLoginTokenSuccess
    | GetLoginTokenFail
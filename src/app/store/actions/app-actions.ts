import { Action } from '@ngrx/store';

export const UPDATE_MODAL_DATA = '[Modal] Update Modal Data';
export const UPDATE_MODAL_DATA_ARRAY = '[Modal] Update Modal Data Array';

export class UpdateModalData implements Action {
    readonly type = UPDATE_MODAL_DATA;
    constructor(public payload: any) { }
}

export class UpdateModalDataArray implements Action {
    readonly type = UPDATE_MODAL_DATA_ARRAY;
    constructor(public payload: any) { }
}

export type All = | UpdateModalData
    | UpdateModalDataArray;

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppReducers } from './app-reducers';
import { AppModuleState, AppState } from '../models';

export const reducers = AppReducers;

export const getAppState = createFeatureSelector<AppState>('appAuthModule');

export const getModalDataItem = createSelector(
    getAppState,
    (state: AppState) => state.modalData.modalItem
);

export const getModalData = createSelector(
    getAppState,
    (state: AppState) => state.modalData
);

export const getActiveDataArray = createSelector(
    getAppState,
    (state: AppState) => state.modalDataArray
);



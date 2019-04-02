import { SurveyState, SurveyModuleState } from '../models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SurveyReducers } from './survey-reducers';

export const reducers = SurveyReducers;

export const getSurveyState = createFeatureSelector<SurveyModuleState, SurveyState>('surveyModule');

export const getSurveyData = createSelector(
    getSurveyState,
    (state: SurveyState) => state.surveyData
);

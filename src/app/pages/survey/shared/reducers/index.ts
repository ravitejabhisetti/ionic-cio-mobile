import { SurveyState, SurveyModuleState } from '../models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SurveyReducers } from './survey-reducers';

export const reducers = SurveyReducers;

export const getSurveyState = createFeatureSelector<SurveyModuleState, SurveyState>('surveyModule');

export const getSurveyData = createSelector(
    getSurveyState,
    (state: SurveyState) => state.surveyData
);

export const getDataLoaded = createSelector(
    getSurveyState,
    (state: SurveyState) => state.dataLoaded
);

export const getPollSurveyData = createSelector(
    getSurveyState,
    (state: SurveyState) => state.surveyData.filter((surveyEntity) => {
        if (surveyEntity.questions[0].counts) {
            return surveyEntity;
        }
    })
);

export const getTriviaSurveyData = createSelector(
    getSurveyState,
    (state: SurveyState) => state.surveyData.filter((surveyEntity) => {
        if (!surveyEntity.questions[0].counts) {
            return surveyEntity;
        }
    })
);



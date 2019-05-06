import { SurveyActions } from '../actions';
import { SurveyState } from '../models';

const initialState: SurveyState = {
    surveyData: null,
    loader: false,
    dataLoaded: false
};

export function SurveyReducers(state: SurveyState = initialState, action: SurveyActions.All) {
    switch (action.type) {
        case SurveyActions.GET_SURVEY:
            return Object.assign({}, state, { loader: action.payload, dataLoaded: false });
        case SurveyActions.GET_SURVEY_SUCCESS:
            console.log('action to check is---', action);
            return Object.assign({}, state, { loader: false, dataLoaded: true, surveyData: action.payload.reverse() });
        case SurveyActions.GET_SURVEY_FAIL:
            return Object.assign({}, state, { loader: false, surveyData: null, dataLoaded: false });
        default:
            return state;
    }
}

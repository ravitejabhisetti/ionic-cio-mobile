import { SurveyActions } from '../actions';
import { SurveyState } from '../models';

const initialState: SurveyState = {
    surveyData: null,
    loader: false,
    dataLoaded: false,
    selectedSurveyModalData: null,
    selectedSurveyIndex: null,
    surveysListActive: []
};

export function SurveyReducers(state: SurveyState = initialState, action: SurveyActions.All) {
    switch (action.type) {
        case SurveyActions.GET_SURVEY:
            return Object.assign({}, state, { loader: action.payload, dataLoaded: false });
        case SurveyActions.GET_SURVEY_SUCCESS:
            return Object.assign({}, state, { loader: false, dataLoaded: true, surveyData: action.payload.reverse() });
        case SurveyActions.GET_SURVEY_FAIL:
            return Object.assign({}, state, { loader: false, surveyData: null, dataLoaded: false });
        case SurveyActions.GET_SELECTED_SURVEY_MODAL_DATA:
            return Object.assign({}, state, {
                selectedSurveyModalData: action.payload.survey,
                selectedSurveyIndex: action.payload.surveyIndex
            });
        case SurveyActions.UPDATE_ACTIVE_SURVEYS_LIST:
            return Object.assign({}, state, {
                surveysListActive: action.payload
            });
        default:
            return state;
    }
}

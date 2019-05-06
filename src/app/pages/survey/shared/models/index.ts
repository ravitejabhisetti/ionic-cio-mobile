export interface SurveyState {
    surveyData: any;
    loader: boolean;
    dataLoaded: boolean;
}

export interface SurveyModuleState {
    surveyModule: SurveyState;
}

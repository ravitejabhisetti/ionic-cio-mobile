export interface SurveyState {
    surveyData: any;
    loader: boolean;
    dataLoaded: boolean;
    selectedSurveyModalData: any;
    selectedSurveyIndex: any;
    surveysListActive: any[];
}

export interface SurveyModuleState {
    surveyModule: SurveyState;
}

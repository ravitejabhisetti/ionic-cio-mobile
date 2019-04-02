import { Component, OnInit, ViewChild } from '@angular/core';
import { SurveyService } from './shared/services/survey-services';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {
  selectedTab = 'all';
  constructor(
    private surveyService: SurveyService
  ) { }

  ngOnInit() {
    this.surveyService.getSurveyData(true);
  }

  selectTab(tab) {
    this.selectedTab = tab;
  }

}

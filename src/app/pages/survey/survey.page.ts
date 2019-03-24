import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {
  selectedTab: string = 'all';
  constructor() { }

  ngOnInit() {
  }

  selectTab(tab) {
    this.selectedTab = tab;
  }

}

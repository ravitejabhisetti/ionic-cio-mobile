import { TriviaSurveysComponent } from './trivia-surveys/trivia-surveys.component';
import { PollSurveysComponent } from './poll-surveys/poll-surveys.component';
import { AllSurveysComponent } from './all-surveys/all-surveys.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SurveyPage } from './survey.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'innerTabs/all',
  },
  {
    path: 'innerTabs', component: SurveyPage,
    children: [
      {
        path: 'all', component: AllSurveysComponent
      },
      {
        path: 'poll', component: PollSurveysComponent
      },
      {
        path: 'trivia', component: TriviaSurveysComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SurveyPage, AllSurveysComponent, PollSurveysComponent, TriviaSurveysComponent]
})
export class SurveyPageModule { }

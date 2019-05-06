import { CioDetailComponent } from './../../common/components/cio-detail-component/cio-detail.component';
import { ComponentsModule } from './../../common/components/components.module';
import { EffectsModule } from '@ngrx/effects';
import { SurveyService } from './shared/services/survey-services';
import { SurveyHttpService } from './shared/services/survey-http-services';
import { TriviaSurveysComponent } from './trivia-surveys/trivia-surveys.component';
import { PollSurveysComponent } from './poll-surveys/poll-surveys.component';
import { AllSurveysComponent } from './all-surveys/all-surveys.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SurveyPage } from './survey.page';
import { SurveyEffects } from './shared/effects';
import { StoreModule } from '@ngrx/store';
import { SurveyReducers } from './shared/reducers/survey-reducers';

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
    ComponentsModule,
    IonicModule,
    EffectsModule.forFeature([SurveyEffects]),
    StoreModule.forFeature('surveyModule', SurveyReducers),
    RouterModule.forChild(routes)
  ],
  providers: [SurveyHttpService, SurveyService],
  entryComponents: [CioDetailComponent],
  declarations: [SurveyPage, AllSurveysComponent, PollSurveysComponent, TriviaSurveysComponent]
})
export class SurveyPageModule { }

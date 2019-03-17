import { ImpactsPage } from './../impacts/impacts.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MainPage } from './main-page/main-page';
import { SurveyPage } from '../survey/survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '', component: HomePage, children: [
          {
            path: '', redirectTo: 'main-page/survey', pathMatch: 'full'
          },
          {
            path: 'main-page', component: MainPage, children: [
              {
                path: 'survey', component: SurveyPage
              },
              {
                path: 'impacts', component: ImpactsPage
              }
            ]
          }
        ]
      }
    ])
  ],
  declarations: [HomePage, MainPage, SurveyPage, ImpactsPage]
})
export class HomePageModule { }

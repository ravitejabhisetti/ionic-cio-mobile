import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/survey',
    pathMatch: 'full'
  },
  {
    path:'tabs',
    component: HomePage,
    children: [
      {
        path: 'survey',
        loadChildren: '../survey/survey.module#SurveyPageModule'
      },
      {
        path: 'impacts',
        loadChildren: '../impacts/impacts.module#ImpactsPageModule'
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
  declarations: [HomePage]
})
export class HomePageModule {}

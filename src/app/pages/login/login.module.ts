import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './shared/effects';
import { StoreModule } from '@ngrx/store';
import { LoginReducers } from './shared/reducers/login-reducers';
import { LoginHttpService } from './shared/services/login-http-services';
import { LoginService } from './shared/services/login-services';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EffectsModule.forFeature([LoginEffects]),
    StoreModule.forFeature('loginModule', LoginReducers),
    RouterModule.forChild(routes)
  ],
  providers: [LoginHttpService, LoginService],
  declarations: [LoginPage]
})
export class LoginPageModule { }

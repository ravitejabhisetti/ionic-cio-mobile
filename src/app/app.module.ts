import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { CioAppApiService } from './common/services/cio-app-api-services';
import { createCioAppApi } from './common/services/create-cio-app-api';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './app.reducers';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    CommonModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    StoreModule.forRoot({appAuthModule: AppReducers}),
    EffectsModule.forRoot([]),
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: CioAppApiService,
      useFactory: createCioAppApi,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

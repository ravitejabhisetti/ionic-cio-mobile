import { CioDetailComponent } from './cio-detail-component/cio-detail.component';
import { CioSurveyBodyComponent } from './cio-survey-body/cio-survey-body.component';
import { CioCardsListComponent } from './cio-cards-list/cio-cards-list.component';
import { CommonModule } from '@angular/common';
import { CioEmptyComponent } from './cio-empty-component/cio-empty-component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CioSurveyHeaderComponent } from './cio-survey-header/cio-survey-header.component';

@NgModule({
    declarations: [
        CioEmptyComponent,
        CioCardsListComponent,
        CioSurveyHeaderComponent,
        CioSurveyBodyComponent,
        CioDetailComponent
    ],
    imports: [CommonModule, IonicModule],
    exports: [
        CioEmptyComponent,
        CioCardsListComponent,
        CioSurveyBodyComponent,
        CioSurveyHeaderComponent,
        CioDetailComponent
    ]
})

export class ComponentsModule { }

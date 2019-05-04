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
    ],
    imports: [CommonModule, IonicModule],
    exports: [
        CioEmptyComponent,
        CioCardsListComponent,
        CioSurveyBodyComponent,
        CioSurveyHeaderComponent,
    ]
})

export class ComponentsModule { }

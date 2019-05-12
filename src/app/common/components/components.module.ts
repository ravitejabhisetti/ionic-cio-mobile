import { CioFooterComponent } from './cio-footer/cio-footer.component';
import { CioSurveyQuesButtonComponent } from './cio-survey-ques-button/cio-survey-ques-button.component';
import { CioSurveyDetailBody } from './cio-survey-detail-body/cio-survey-detail-body.component';
import { CioDetailComponent } from './cio-detail-component/cio-detail.component';
import { CioSurveyBodyComponent } from './cio-survey-body/cio-survey-body.component';
import { CioCardsListComponent } from './cio-cards-list/cio-cards-list.component';
import { CommonModule } from '@angular/common';
import { CioEmptyComponent } from './cio-empty-component/cio-empty-component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CioSurveyHeaderComponent } from './cio-survey-header/cio-survey-header.component';
import { CioSurveyAnsweredButton } from './cio-survey-answered-btn/cio-survey-answered-btn.component';

@NgModule({
    declarations: [
        CioEmptyComponent,
        CioCardsListComponent,
        CioSurveyHeaderComponent,
        CioSurveyBodyComponent,
        CioDetailComponent,
        CioSurveyDetailBody,
        CioSurveyQuesButtonComponent,
        CioSurveyAnsweredButton,
        CioFooterComponent
    ],
    imports: [CommonModule, IonicModule],
    exports: [
        CioEmptyComponent,
        CioCardsListComponent,
        CioSurveyBodyComponent,
        CioSurveyHeaderComponent,
        CioDetailComponent,
        CioSurveyDetailBody,
        CioSurveyQuesButtonComponent,
        CioSurveyAnsweredButton,
        CioFooterComponent
    ]
})

export class ComponentsModule { }

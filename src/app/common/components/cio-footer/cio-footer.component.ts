import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveyService } from '../../../pages/survey/shared/services/survey-services';

@Component({
    selector: 'cio-footer',
    templateUrl: 'cio-footer.component.html',
    styleUrls: ['cio-footer.component.scss']
})

export class CioFooterComponent {
    @Input() enableBackButton = false;
    @Input() enableNextButton = false;
    @Output() backButtonEmitter = new EventEmitter();
    @Output() nextButtonEmitter = new EventEmitter();

    goToBack(event) {
        if (this.enableBackButton) {
            this.backButtonEmitter.emit(event);
        }
    }

    goToNext(event) {
        if (this.enableNextButton) {
            this.nextButtonEmitter.emit(event);
        }
    }
}

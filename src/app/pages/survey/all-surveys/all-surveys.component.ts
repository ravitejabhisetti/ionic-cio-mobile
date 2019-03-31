import { Component } from '@angular/core';

@Component({
    selector: 'all-surveys',
    templateUrl: 'all-surveys.component.html'
})

export class AllSurveysComponent {
    ionViewWillEnter() {
     console.log('in all survey component---');
    }
}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'cio-cards-list',
    templateUrl: 'cio-cards-list.component.html'
})

export class CioCardsListComponent {
    @Input() cardsListType: any;

}

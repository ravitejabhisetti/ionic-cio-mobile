import { Component, Input } from '@angular/core';

@Component({
    selector: 'cio-cards-list',
    templateUrl: 'cio-cards-list.component.html',
    styleUrls: ['cio-cards-list.component.scss']
})

export class CioCardsListComponent {
    @Input() cardsListType: any;

}

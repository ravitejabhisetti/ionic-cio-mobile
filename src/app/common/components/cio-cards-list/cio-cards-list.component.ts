import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'cio-cards-list',
    templateUrl: 'cio-cards-list.component.html',
    styleUrls: ['cio-cards-list.component.scss']
})

export class CioCardsListComponent implements OnInit {
    @Input() cardsListType: any;

    ngOnInit() {
    }

}

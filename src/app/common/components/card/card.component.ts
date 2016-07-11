import {Component, ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'gr-card',
    styles: [require('./card.scss')],
    template: require('./card.tpl.html'),
    encapsulation: ViewEncapsulation.None
})
export class Card {
    @Input() title: String;
    @Input() baCardClass: String;
}

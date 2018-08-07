import { Component } from '@angular/core';

/**
 * Generated class for the OfferChatCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'offer-chat-card',
  templateUrl: 'offer-chat-card.html'
})
export class OfferChatCardComponent {

  text: string;

  constructor() {
    console.log('Hello OfferChatCardComponent Component');
    this.text = 'Hello World';
  }

}

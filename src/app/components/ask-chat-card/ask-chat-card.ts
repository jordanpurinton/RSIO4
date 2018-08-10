import { Component } from '@angular/core';

/**
 * Generated class for the AskChatCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-ask-chat-card',
  templateUrl: 'ask-chat-card.html'
})
export class AskChatCardComponent {

  text: string;

  constructor() {
    console.log('Hello AskChatCardComponent Component');
    this.text = 'Hello World';
  }

}

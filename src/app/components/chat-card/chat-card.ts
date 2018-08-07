import { Component } from '@angular/core';

/**
 * Generated class for the ChatCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-card',
  templateUrl: 'chat-card.html'
})
export class ChatCardComponent {

  text: string;

  constructor() {
    console.log('Hello ChatCardComponent Component');
    this.text = 'Hello World';
  }

}

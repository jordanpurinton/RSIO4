import { Component } from '@angular/core';

/**
 * Generated class for the ConfirmRouteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'confirm-route',
  templateUrl: 'confirm-route.html'
})
export class ConfirmRouteComponent {

  text: string;

  constructor() {
    console.log('Hello ConfirmRouteComponent Component');
    this.text = 'Hello World';
  }

}

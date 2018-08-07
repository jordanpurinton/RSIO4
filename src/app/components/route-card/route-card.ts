import { Component } from '@angular/core';

/**
 * Generated class for the RouteCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'route-card',
  templateUrl: 'route-card.html'
})
export class RouteCardComponent {

  text: string;

  constructor() {
    console.log('Hello RouteCardComponent Component');
    this.text = 'Hello World';
  }

}

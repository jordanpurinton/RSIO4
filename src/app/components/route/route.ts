import { Component } from '@angular/core';

/**
 * Generated class for the RouteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'route',
  templateUrl: 'route.html'
})
export class RouteComponent {

  text: string;

  constructor() {
    console.log('Hello RouteComponent Component');
    this.text = 'Hello World';
  }

}

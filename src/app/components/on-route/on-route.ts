import { Component } from '@angular/core';

/**
 * Generated class for the OnRouteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-on-route',
  templateUrl: 'on-route.html'
})
export class OnRouteComponent {

  text: string;

  constructor() {
    console.log('Hello OnRouteComponent Component');
    this.text = 'Hello World';
  }

}

import { Component } from '@angular/core';

/**
 * Generated class for the RouteListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'route-list',
  templateUrl: 'route-list.html'
})
export class RouteListComponent {

  text: string;

  constructor() {
    console.log('Hello RouteListComponent Component');
    this.text = 'Hello World';
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-route-list',
  templateUrl: 'route-list.html'
})
export class RouteListComponent {

  text: string;

  constructor() {
    console.log('Hello RouteListComponent Component');
    this.text = 'Hello World';
  }

}

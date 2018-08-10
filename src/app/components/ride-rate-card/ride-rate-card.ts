import { Component } from '@angular/core';

/**
 * Generated class for the RideRateCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-ride-rate-card',
  templateUrl: 'ride-rate-card.html'
})
export class RideRateCardComponent {

  text: string;

  constructor() {
    console.log('Hello RideRateCardComponent Component');
    this.text = 'Hello World';
  }

}

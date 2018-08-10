import { Component } from '@angular/core';

/**
 * Generated class for the DistanceSliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-distance-slider',
  templateUrl: 'distance-slider.html'
})
export class DistanceSliderComponent {

  text: string;

  constructor() {
    console.log('Hello DistanceSliderComponent Component');
    this.text = 'Hello World';
  }

}

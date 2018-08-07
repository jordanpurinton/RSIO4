import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { RouteListComponent } from '../route-list/route-list';
import { RouteComponent } from '../route/route';

declare var google;
@Component({
  selector: 'page-request-route',
  templateUrl: 'request-route.html',
  template: `
    <ion-list>
      <ion-list-header>Ionic</ion-list-header>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
export class ReqRoutePopover {
  constructor(public viewCtrl: ViewController) { }
  public map: any;
  public route: RouteComponent;
  public routeList: RouteListComponent[] = [];
  public reqRoute: (reqRouteStart, reqRouteEnd) => reqRoute;


  public reqRouteStart(lat: number, lng: number): void {

    let latLng = new google.maps.LatLng(lat, lng);

    let reqRouteStart = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    })
  }

  public reqRouteEnd(lat: number, lng: number): void {

    let latLng = new google.maps.LatLng(lat, lng);

    let routeEnd = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    })
  }

  close() {
    this.viewCtrl.dismiss();
  }
}

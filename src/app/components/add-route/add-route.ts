import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { RouteComponent } from '../route/route';
import { RouteListComponent } from '../route-list/route-list';

declare var google;
@Component({
  selector: 'page-add-route',
  templateUrl: 'add-route.html',
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
export class AddRoutePopover {
  constructor(public viewCtrl: ViewController) { }
  public map: any;
  public route: RouteComponent;
  public routeList: RouteListComponent[] = [];


  public addRouteStart(lat: number, lng: number): void {

    let latLng = new google.maps.LatLng(lat, lng);

    let routeStart = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    })

  }

  public addRouteEnd(lat: number, lng: number): void {

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

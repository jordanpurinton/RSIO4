import { Component } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { RouteComponent } from '../route/route';
import { RouteListComponent } from '../route-list/route-list';

declare var google;
@Component({
  selector: 'app-request-route',
  templateUrl: 'request-route.html',
  template: `
    <ion-list>
      <ion-list-header><ion-label>Ionic</ion-label></ion-list-header>
      <ion-item (click)="close()"><ion-label>Learn Ionic</ion-label></ion-item>
      <ion-item (click)="close()"><ion-label>Documentation</ion-label></ion-item>
      <ion-item (click)="close()"><ion-label>Showcase</ion-label></ion-item>
      <ion-item (click)="close()"><ion-label>GitHub Repo</ion-label></ion-item>
    </ion-list>
  `
})
export class ReqRouteModal {
  constructor(private alertCtrl: AlertController, private modalCtrl: ModalController) { }
  public map: any;
  public route: RouteComponent;
  public routeList: RouteListComponent[] = [];


  public reqRouteStart(lat: number, lng: number): void {

    const latLng = new google.maps.LatLng(lat, lng);

    const reqRouteStart = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
  }

  public reqRouteEnd(lat: number, lng: number): void {

    const latLng = new google.maps.LatLng(lat, lng);

    const routeEnd = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
  }

  public reqRoute(reqRouteStart, reqRouteEnd) {
    const routeStart = reqRouteStart.google.maps.Animation.DROP;
    const routeEnd = reqRouteEnd.google.maps.Animation.DROP;
  }

  close() {
    this.modalCtrl.dismiss();
  }
}

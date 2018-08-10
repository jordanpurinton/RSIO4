
import { Component, Input, Renderer2, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Plugins } from '@capacitor/core';
import { RouteListComponent } from '../route-list/route-list';
import { RouteComponent } from '../route/route';

const { Geolocation, Network } = Plugins;

declare var google;
@Component({
  selector: 'app-google-maps',
  templateUrl: 'google-maps.html'
})
export class GoogleMapComponent {

  @Input() apiKey: string;

  public map: any;
  public markers: any[] = [];
  public route: RouteComponent;
  public routeList: RouteListComponent[] = [];
  private mapsLoaded: boolean = false;
  private networkHandler = null;

  constructor(private renderer: Renderer2, private element: ElementRef, @Inject(DOCUMENT) private _document) {

  }

  OnInit() {

    this.init().then((res) => {
      console.log('Google Maps ready.');
    }, (err) => {
      console.log(err);
    });

  }

  private init(): Promise<any> {

    return new Promise((resolve, reject) => {

      this.loadSDK().then((res) => {

        this.initMap().then(() => {
          resolve(true);
        }, (err) => {
          reject(err);
        });

      }, (err) => {

        reject(err);

      });

    });

  }

  private loadSDK(): Promise<any> {

    console.log('Loading Google Maps SDK');

    return new Promise((resolve, reject) => {

      if (!this.mapsLoaded) {

        Network.getStatus().then((status) => {

          if (status.connected) {

            this.injectSDK().then((res) => {
              resolve(true);
            }, (err) => {
              reject(err);
            });

          } else {

            if (this.networkHandler == null) {

              this.networkHandler = Network.addListener('networkStatusChange', () => {

                if (status.connected) {

                  this.networkHandler.remove();

                  this.init().then((res) => {
                    console.log('Google Maps ready.');
                  }, (err) => {
                    console.log(err);
                  });

                }

              });

            }

            reject('Not online');
          }

        }, (err) => {

          // NOTE: navigator.onLine temporarily required until Network plugin has web implementation
          if (navigator.onLine) {

            this.injectSDK().then((res) => {
              resolve(true);
            }, () => {
              reject(err);
            });

          } else {
            reject('Not online');
          }

        });

      } else {
        reject('SDK already loaded');
      }

    });


  }

  private injectSDK(): Promise<any> {

    return new Promise((resolve, reject) => {

      window['mapInit'] = () => {
        this.mapsLoaded = true;
        resolve(true);
      };

      const script = this.renderer.createElement('script');
      script.id = 'googleMaps';

      if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
      }

      this.renderer.appendChild(this._document.body, script);

    });

  }

  private initMap(): Promise<any> {

    return new Promise((resolve, reject) => {

      Geolocation.getCurrentPosition().then((position) => {

        console.log(position);

        const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        const mapOptions = {
          center: latLng,
          zoom: 15
        };

        this.map = new google.maps.Map(this.element.nativeElement, mapOptions);
        resolve(true);

      }, (err) => {

        reject('Could not initialise map');

      });

    });

  }

  public addMarker(lat: number, lng: number): void {

    const latLng = new google.maps.LatLng(lat, lng);

    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    this.markers.push(marker);

  }

  public addRouteStart(lat: number, lng: number): void {

    const latLng = new google.maps.LatLng(lat, lng);

    const routeStart = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

  }

  public addRouteEnd(lat: number, lng: number): void {

    const latLng = new google.maps.LatLng(lat, lng);

    const routeEnd = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
  }

  //    const marker = new google.maps.Marker({
  // map: this.map,
  // animation: google.maps.Animation.DROP,
  // position: latLng
  // });

  public reqRouteStart(lat: number, lng: number): void {

    const latLng = new google.maps.LatLng(lat, lng);

    const routeStart = new google.maps.Marker({
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

}

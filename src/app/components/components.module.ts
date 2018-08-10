import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// made modules;
import { AddRouteModal } from './add-route/add-route';
import { AskChatCardComponent } from './ask-chat-card/ask-chat-card';
import { ChatCardComponent } from './chat-card/chat-card';
import { ConfirmRouteComponent } from './confirm-route/confirm-route';
import { DistanceSliderComponent } from './distance-slider/distance-slider';
import { GoogleMapComponent } from './google-maps/google-maps';
import { HeadbuttonsComponent } from './headbuttons/headbuttons';
import { OfferChatCardComponent } from './offer-chat-card/offer-chat-card';
import { OnRouteComponent } from './on-route/on-route';
import { ReqRouteModal } from './request-route/request-route';
import { RideRateCardComponent } from './ride-rate-card/ride-rate-card';
import { RouteCardComponent } from './route-card/route-card';
import { RouteComponent } from './route/route';
import { RouteFilterComponent } from './route-filter/route-filter';
import { RouteListComponent } from './route-list/route-list';

declare var google;

@NgModule({
  declarations: [
    AddRouteModal,
    AskChatCardComponent,
    ChatCardComponent,
    ConfirmRouteComponent,
    DistanceSliderComponent,
    GoogleMapComponent,
    HeadbuttonsComponent,
    OfferChatCardComponent,
    OnRouteComponent,
    ReqRouteModal,
    RideRateCardComponent,
    RouteCardComponent,
    RouteComponent,
    RouteFilterComponent,
    RouteListComponent
  ],
  imports: [
    CommonModule, FormsModule, IonicModule],
  exports: [
    AddRouteModal,
    AskChatCardComponent,
    ChatCardComponent,
    ConfirmRouteComponent,
    DistanceSliderComponent,
    GoogleMapComponent,
    HeadbuttonsComponent,
    OfferChatCardComponent,
    OnRouteComponent,
    ReqRouteModal,
    RouteCardComponent,
    RouteComponent,
    RouteFilterComponent,
    RouteListComponent,
    RideRateCardComponent]
})
export class ComponentsModule { }

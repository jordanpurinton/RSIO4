import { NgModule } from '@angular/core';
import { AddRoutePopover } from './add-route/add-route';
import { AskChatCardComponent } from './ask-chat-card/ask-chat-card';
import { ChatCardComponent } from './chat-card/chat-card';
import { CommonModule } from '@angular/common';
import { ConfirmRouteComponent } from './confirm-route/confirm-route';
import { DistanceSliderComponent } from './distance-slider/distance-slider';
import { GoogleMapComponent } from './google-maps/google-maps';
import { HeadbuttonsComponent } from './headbuttons/headbuttons';
import { IonicModule } from 'ionic-angular/';
import { OfferChatCardComponent } from './offer-chat-card/offer-chat-card';
import { OnRouteComponent } from './on-route/on-route';
import { ReqRoutePopover } from './request-route/request-route';
import { RideRateCardComponent } from './ride-rate-card/ride-rate-card';
import { RouteCardComponent } from './route-card/route-card';
import { RouteComponent } from './route/route';
import { RouteFilterComponent } from './route-filter/route-filter';
import { RouteListComponent } from './route-list/route-list';

declare var google;
@NgModule({
  declarations: [
    AddRoutePopover,
    AskChatCardComponent,
    ChatCardComponent,
    ConfirmRouteComponent,
    DistanceSliderComponent,
    GoogleMapComponent,
    HeadbuttonsComponent,
    OfferChatCardComponent,
    OnRouteComponent,
    ReqRoutePopover,
    RideRateCardComponent,
    RouteCardComponent,
    RouteComponent,
    RouteFilterComponent,
    RouteListComponent
  ],
  imports: [
    CommonModule, IonicModule],
  exports: [
    AddRoutePopover,
    AskChatCardComponent,
    ChatCardComponent,
    ConfirmRouteComponent,
    DistanceSliderComponent,
    GoogleMapComponent,
    HeadbuttonsComponent,
    OfferChatCardComponent,
    OnRouteComponent,
    ReqRoutePopover,
    RouteCardComponent,
    RouteComponent,
    RouteFilterComponent,
    RouteListComponent,
    RideRateCardComponent]
})
export class ComponentsModule { }

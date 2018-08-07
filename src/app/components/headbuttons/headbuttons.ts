import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { AddRoutePopover } from "../add-route/add-route";
import { ReqRoutePopover } from "../request-route/request-route";
import { User } from '../../../node_modules/firebase';

@Component({
  selector: 'headbuttons',
  templateUrl: 'headbuttons.html'
})
export class HeadbuttonsComponent {
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) { }
  public user: User;
  presentAddPopover(addRouteStart, addRouteEnd) {
    let popover = this.popoverCtrl.create(AddRoutePopover);
    popover.present({
      ev: AddRoutePopover

    });
  }

  presentReqPopover(reqRoute) {
    let popover = this.popoverCtrl.create(ReqRoutePopover);
    popover.present({
      ev: ReqRoutePopover
    });
  }
}

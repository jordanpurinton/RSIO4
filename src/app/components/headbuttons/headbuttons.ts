import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

import { AddRouteModal } from '../add-route/add-route';
import { ReqRouteModal } from '../request-route/request-route';
// import { User } from '../../../../node_modules/firebase';

@Component({
  selector: 'app-headbuttons',
  templateUrl: 'headbuttons.html'
})
export class HeadbuttonsComponent {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }
  // public user: User;
  async presentAddModal(addRoute) {
    const modal = await this.modalCtrl.create({
      component: AddRouteModal,
      componentProps: { addRoute }
    });
  }

  async presentReqModal(reqRoute) {
    const modal = await this.modalCtrl.create({
      component: ReqRouteModal,
      componentProps: { reqRoute }
    });
  }
}

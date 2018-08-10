import { Component, ViewChild } from '@angular/core';
import { Platform, Tab } from '@ionic/angular';
import { TabsPage } from './pages/tabs/tabs.page';

import * as firebase from 'firebase/app';

import { firebaseConfig } from './credentials';
import { Unsubscribe } from '@firebase/util';
import { Plugins, StatusBarPlugin, SplashScreenPlugin, StatusBarStyle } from '@capacitor/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  appPages = [
    { title: 'Routes', url: '/app/tabs/(tab1:routes)', icon: 'map' },
    { title: 'Chats', url: '/app/tabs/(tab2:chats)', icon: 'chatbubbles' },
    { title: 'Settings', url: '/app/tabs/(tab3:settings)', icon: 'cog' }
  ];

  currentUser: any;
  constructor(private platform: Platform,
    private router: Router,
    private userService: UserService) {
    this.initializeApp();

    this.currentUser = this.userService.currentUser;
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // this.rootPage = TabsPage;

    });
  }
  // navigateTo(url: string) {
  //   this.router.navigateByUrl(url);
  // }

  // logout() {
  //   this.userService.logout()
  //     .then(_ => {
  //       this.navigateTo('/login');
  //     });
  // }
}




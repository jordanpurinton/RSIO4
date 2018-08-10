import { IonicModule } from '@ionic/angular';

import { RouterModule, Routes } from '@angular/router';
import { createRouterScroller } from '@angular/router/src/router_module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RoutesPageModule } from './routes/routes.module';
import { ChatsPageModule } from './chats/chats.module';
import { SettingsPageModule } from './settings/settings.module';

import { RoutesPage } from './routes/routes.page';
import { ChatsPage } from './chats/chats.page';
import { SettingsPage } from './settings/settings.page';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'routes',
        outlet: 'tab1',
        component: RoutesPage
      },
      {
        path: 'chats',
        outlet: 'tab2',
        component: ChatsPage
      },
      {
        path: 'settings',
        outlet: 'tab3',
        component: SettingsPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/tabs/(tab1:routes)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    RoutesPageModule,
    ChatsPageModule,
    SettingsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }

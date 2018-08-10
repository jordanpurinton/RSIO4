import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GuardsModule } from './guards/guards.module';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'account', loadChildren: './pages/account/account.module#AccountPageModule' },
  { path: 'chats', loadChildren: './pages/tabs/chats/chats.module#ChatsPageModule' },
  { path: 'driver-info', loadChildren: './pages/driver-info/driver-info.module#DriverInfoPageModule' },
  { path: 'edit-account', loadChildren: './pages/edit-account/edit-account.module#EditAccountPageModule' },
  { path: 'forgot-password', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'payments', loadChildren: './pages/payments/payments.module#PaymentsPageModule' },
  { path: 'routes', loadChildren: './pages/tabs/routes/routes.module#RoutesPageModule' },
  { path: 'settings', loadChildren: './pages/tabs/settings/settings.module#SettingsPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'app', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    GuardsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

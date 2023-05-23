import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CartComponent} from './pages/cart/cart.component';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import {ContactComponent} from './footer/contact/contact.component';
import {DatamanagementComponent} from './footer/datamanagement/datamanagement.component';
import {InformationComponent} from './footer/information/information.component';
import { HomeWithoutUserComponent } from './pages/home-without-user/home-without-user.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'home-without-user',
    component: HomeWithoutUserComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'information',
    component: InformationComponent,
  },
  {
    path: 'datamanagement',
    component: DatamanagementComponent,
  },
  {
    path: '', redirectTo: 'home-without-user', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

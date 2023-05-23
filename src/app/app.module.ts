import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeWithoutUserComponent } from './pages/home-without-user/home-without-user.component';
import { PagesheaderComponent } from './pages/pagescomp/pagesheader/pagesheader.component';
import { FiltersComponent } from './pages/pagescomp/filters/filters.component';
import { PagesproductComponent } from './pages/pagescomp/pagesproduct/pagesproduct.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './footer/contact/contact.component';
import { InformationComponent } from './footer/information/information.component';
import { DatamanagementComponent } from './footer/datamanagement/datamanagement.component';

import { CartService } from './services/cart.service';
import { WebshopService } from './services/webshop.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    PagesheaderComponent,
    FiltersComponent,
    PagesproductComponent,
    CartComponent,
    AdminComponent,
    ContactComponent,
    InformationComponent,
    DatamanagementComponent,
    HomeWithoutUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule
  ],
  providers: [CartService, WebshopService],
  bootstrap: [AppComponent]
})
export class AppModule { }

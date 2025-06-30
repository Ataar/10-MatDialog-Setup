// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { NavbarComponent } from './shared/components/navbar/navbar.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatButtonModule} from '@angular/material/button';
// import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
// import { UsersComponent } from './shared/components/users/users.component';
// import { ProductsComponent } from './shared/components/products/products.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ProductComponent } from './shared/components/product/product.component';
// import { ProductFormComponent } from './shared/components/product-form/product-form.component';
// import { MatIconModule } from '@angular/material/icon';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import { MatDialogModule } from '@angular/material/dialog';
// import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
// import { LoginComponent } from './shared/components/login/login.component';
// import { HttpClientModule } from '@angular/common/http';
// import { UserComponent } from './shared/components/user/user.component';
// import { UserFormComponent } from './shared/components/user-form/user-form.component';
// import { MatChipsModule } from '@angular/material/chips';

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     DashboardComponent,
//     UsersComponent,
//     ProductsComponent,
//     ProductComponent,
//     ProductFormComponent,
//     ConfirmDialogComponent,
//     LoginComponent,
//     UserComponent,
//     UserFormComponent,

    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     MatButtonModule,
//     FormsModule,
//     MatIconModule,
//     MatTooltipModule,
//     ReactiveFormsModule,
//     MatDialogModule,
//    HttpClientModule, 
//    MatChipsModule,
  
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './shared/components/user/user.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { MatChipsModule } from '@angular/material/chips';

// ✅ Import the emoji-picker-element polyfill (add this in polyfills.ts instead if preferred)
import 'emoji-picker-element';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    ProductComponent,
    ProductFormComponent,
    ConfirmDialogComponent,
    UserComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

  // ✅ Required for emoji-picker-element
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    ProductComponent,
    ProductFormComponent,
    ConfirmDialogComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

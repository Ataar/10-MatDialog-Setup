import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
  {
    path:'', 
    redirectTo:'home',   // http://localhost:4200
    pathMatch:'full'
  },
  
  {
    path:'home', 
    component:DashboardComponent  // http://localhost:4200/home
  },


  {
    path:'users',           // http://localhost:4200/users
    component:UsersComponent
  },

  {
    path:'products',          // http://localhost:4200/products
    component:ProductsComponent
  },
  {
    path:'products/addProduct',  // http://localhost:4200/products/addProduct
    component:ProductFormComponent
  },

  {
    //:pid is param and angular sees that 123 is the value of the parameter pid.

    path:'products/:pid',  // http://localhost:4200/products/123
    component:ProductComponent

  },
  {
    path:'products/pid/edit' ,  // http://localhost:4200/products/edit
    component:ProductFormComponent
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // we creating this routing for root
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

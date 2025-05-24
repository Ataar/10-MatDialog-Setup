import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';



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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // we creating this routing for root
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

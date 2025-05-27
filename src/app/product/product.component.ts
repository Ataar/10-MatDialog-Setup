import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/service/products.service';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../shared/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

prodId !: string;
product ! : Iproduct


  // 1-   single product me agar param aka id get karna hai to phle single product me jana hoga
  // 2 -  curent or active route se id chahiye matlab apko koi bhi activetd rout se chahiye
  // to   "ActivtedRoute" ye apki madad karega id get karne keliye.
    
  constructor(
    private routes: ActivatedRoute , // ActivatedRoute ye instance apko product ka id dega
    private prodsutsService : ProductsService
  ) { }

  ngOnInit(): void {
    // console.log(this.routes.snapshot.params['pid']);  // here we got id
    this.prodId = this.routes.snapshot.params['pid']  // here we got id

    this.product = this.prodsutsService.getProduct(this.prodId)
    //  Get Id and api call using service to get single product.
    
  }

}













// import { Component, OnInit } from '@angular/core';
// import { ProductsService } from '../shared/service/products.service';
// import { ActivatedRoute } from '@angular/router';
// import { Iproduct } from '../shared/models/products';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.scss']
// })
// export class ProductComponent implements OnInit {
//   products: Array<Iproduct> = [];
//   prodId?: string;
//   product?: Iproduct;

//   constructor(
//     private routes: ActivatedRoute,
//     private productsService: ProductsService
//   ) { }

//   ngOnInit(): void {
//     this.prodId = this.routes.snapshot.params['pid'];
//     if (this.prodId) {
//       this.product = this.productsService.getProduct(this.prodId);
//     } else {
//       this.products = this.productsService.fetchAllproducts();
//     }
//   }
// }
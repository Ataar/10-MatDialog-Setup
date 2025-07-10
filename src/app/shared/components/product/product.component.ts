import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../models/products';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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
    private prodsutsService : ProductsService,
    // private location : Location,
  private router: Router,
   private dialog: MatDialog
    
  ) { }

  ngOnInit(): void {
    // console.log(this.routes.snapshot.params['pid']);  // here we got id
    this.prodId = this.routes.snapshot.params['pid']  // here we got id

    this.product = this.prodsutsService.getProduct(this.prodId)
    //  Get Id and api call using service to get single product.
     console.log(this.product);
     
  }

   
  goBack()
  {
    this.router.navigate(['/products']);
  }

goToProduct(url: string) {
  url ? window.location.href= url : this.router.navigate(['/products']);
  //  here url ?→ checks if url exists (is truthy).

  // window.location.href = url → changes the current page to that URL (same as clicking a normal link).
}

  // If we want to open in new tab
  
// goToProduct(url: string | null) {
//   url ? window.open(url, '_blank', 'noopener') : this.router.navigate(['/products']);
// }


onDelete() {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: {
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this product?'
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.prodsutsService.onDelPro(this.product);
      this.router.navigate(['/products']);
    }
  });
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
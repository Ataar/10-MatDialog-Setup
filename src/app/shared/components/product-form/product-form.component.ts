import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  proId!:string;
  isEditMode: boolean = false;  // it is a flag that is by default false and 
  // we want our component in Add product mode by default.


  constructor(
    private route : ActivatedRoute
  ) { }

  // ngOnInit(): void {
  //   this.proId = this.route.snapshot.params['pid']
  //   console.log(this.proId);
    
  // }
  
  ngOnInit(): void {
    this.proId = this.route.snapshot.params['pid'];


    // 1 - this.isEditMode =  !!this.proId // true if pid exists

    // ----------------------------------------------------------------


//   2 -  if (this.proId) {
//     this.isEditMode = true;
// }   else {
//     this.isEditMode = false;
// }

    // ----------------------------------------------------------------


//  3 - this.isEditMode = this.proId ? true : false;


// ------------------------------------------------------


this.isEditMode = Boolean(this.proId );


  console.log('Product ID:', this.proId);
  console.log('Edit Mode:', this.isEditMode);
}



  onSubmit(){

  }
}

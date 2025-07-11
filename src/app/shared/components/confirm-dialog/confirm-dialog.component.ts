// import { Component, Inject } from '@angular/core'; // Angular ka Component aur Inject decorator import kiya
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';  // Dialog data aur reference ke liye import

// @Component({
//   selector: 'app-confirm-dialog',
//   templateUrl: './confirm-dialog.component.html',
//   styleUrls: ['./confirm-dialog.component.scss']
// })
// export class ConfirmDialogComponent {
//   constructor(
//     public dialogRef: MatDialogRef<ConfirmDialogComponent>,  // Dialog close karne ke liye dialogRef
//     @Inject(MAT_DIALOG_DATA) public data: any    // Parent component se data receive karne ke liye
//   ) {}

//   onYesClick(): void {
//     this.dialogRef.close(true); // Dialog close karne ka method
//   }

//   onNoClick(): void {
//     this.dialogRef.close(false); // Dialog close karne ka method
//   }
// }

import { Component, Inject } from '@angular/core'; // Angular ka Component aur Inject decorator import kiya
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; // Dialog data aur reference ke liye import

@Component({
  // selector: 'app-custom-dialog', // Component ka selector
  // templateUrl: './custom-dialog.component.html', // Template file ka path
    selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']

})
export class CustomDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CustomDialogComponent>, // Dialog close karne ke liye dialogRef
    @Inject(MAT_DIALOG_DATA) public data: any // Parent component se data receive karne ke liye
  ) {}


  onYes()
  {
     this.dialogRef.close(true); // Delete confirm karne ka method
  }
  onClose(): void {
    this.dialogRef.close(false); // Dialog close karne ka method
  }
}

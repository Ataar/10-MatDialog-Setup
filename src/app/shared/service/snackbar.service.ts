import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackbar:MatSnackBar
  ) {}

  openSnackBar(msg :string)   // openSnackBar is our self function
  {
    let configObj:MatSnackBarConfig = {
     verticalPosition:'top',
     horizontalPosition:'center',
     duration:3000
    }
    this.snackbar.open(msg,"Close",configObj)
  }
}

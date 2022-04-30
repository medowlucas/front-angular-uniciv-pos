import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private _snackBar: MatSnackBar) { }

  showMessage(msg: string){
    this._snackBar.open(msg,"x",{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: 'top',
    });
  }
}

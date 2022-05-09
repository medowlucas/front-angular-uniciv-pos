import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private _snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this._snackBar.open(msg,"x",{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: 'top',
      panelClass: isError ? ['snack-message-error'] : ['snack-message-success'],
    });
  }
}

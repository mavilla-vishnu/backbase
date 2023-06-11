import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private snackbar: MatSnackBar) { }

  canActivate(): boolean {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);
      this.snackbar.open("Please login to continue!", "Okay");
      return false;
    } else {
      return true;
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn: any = false;
  constructor(private snackbar: MatSnackBar, private router: Router) { }
  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('token');
  }

  makeLoginSuccess() {
    localStorage.setItem('token', 'abcdefghijklmnopqrstuv');
    this.router.navigateByUrl('dashboard');
    this.snackbar.open("Great! You are now logged in!", "Okay", { duration: 2000 });
    this.isLoggedIn = true;
  }
  logout() {
    localStorage.removeItem('token');
    this.snackbar.open("You are logged out", "Okay", { duration: 2000 });
    this.clearLS()
  }
  clearLS() {
    this.isLoggedIn = !localStorage.getItem('token') == null;
  }
}

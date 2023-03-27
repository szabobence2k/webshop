import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAdmin = false;
  loginUsers: any[] = [];
  registrationElements: any = {
    userName: '',
    email: '',
    password: '',
  };

  loginElements: any = {
    userName: '',
    password: '',
  };

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const LocalData = localStorage.getItem('this.loginUsers');
    if (LocalData !== null) {
      this.loginUsers = JSON.parse(LocalData);
    }
  }

  onRegistration(): void {
    this.loginUsers.push(this.registrationElements);
    localStorage.setItem('loginUsers', JSON.stringify(this.loginUsers));
    this.registrationElements = {
      userName: '',
      email: '',
      password: '',
    };
  }

  onLogin(): void {
    const isUserExist = this.loginUsers.find(exist => exist.userName === this.loginElements.userName && exist.password === this.loginElements.password);
    if (isUserExist !== undefined && this.loginElements.userName !== 'admin' && this.loginElements.password !== 'admin') {
      this._snackBar.open('Sikeresen bejelentkezve!', 'Rendben', { duration: 5000 });
      this.goShopping();
    }
    else if (this.loginElements.userName === 'admin' && this.loginElements.password === 'admin') {
      this._snackBar.open('Sikeresen bejelentkezve Adminként!', 'Rendben', { duration: 5000 });
      window.location.href = '/cart';
    }
    else {
      this._snackBar.open('Bejelentkezés sikertelen!', 'Rendben', { duration: 5000 });
    }
  }
  
  goShopping(): void {
    window.location.href = '/home';
  }
}

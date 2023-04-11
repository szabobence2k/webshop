import { Component, OnInit, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})

export class LoginComponent implements OnInit {

  isAdmin = true;
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
    if (this.loginUsers.find(exist => exist.userName === this.registrationElements.userName && exist.email === this.registrationElements.email) === undefined) {
    this.loginUsers.push(this.registrationElements);
    localStorage.setItem('loginUsers', JSON.stringify(this.loginUsers));
    this.registrationElements = {
      userName: '',
      email: '',
      password: '',
    };
    this._snackBar.open('Sikeres regisztráció!', 'Rendben', { duration: 5000 });
    } else {this._snackBar.open('Sikertelen regisztráció! A felhasználónév vagy e-mail cím foglalt!', 'Rendben', { duration: 5000 });}
  }

  onLogin(): void {
    const isUserExist = this.loginUsers.find(exist => exist.userName === this.loginElements.userName && exist.password === this.loginElements.password);
    if (isUserExist !== undefined && this.loginElements.userName !== 'admin' && this.loginElements.password !== 'admin') {
      this._snackBar.open('Sikeresen bejelentkezve!', 'Rendben', { duration: 5000 });
      this.isAdmin = false;
      window.location.href = '/home';
    }
    else if (this.loginElements.userName === 'admin' && this.loginElements.password === 'admin') {
      this._snackBar.open('Sikeresen bejelentkezve Adminként!', 'Rendben', { duration: 5000 });
      this.isAdmin = true;
      window.location.href = '/admin';
    }
    else {
      this._snackBar.open('Bejelentkezés sikertelen!', 'Rendben', { duration: 5000 });
    }
  }
}

import { Component, Injectable, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

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
    address: '',
  };

  loginElements: any = {
    userName: '',
    password: '',
  };

  action = 'OK';

  private configSuccess: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  };

  constructor(private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const LocalData = localStorage.getItem('this.loginUsers');
    if (LocalData !== null) {
      this.loginUsers = JSON.parse(LocalData);
    }
  }

  onRegistration(): void {
    if (this.loginUsers.find(exist => exist.userName === this.registrationElements.userName || exist.email === this.registrationElements.email) === undefined) {
      this.loginUsers.push(this.registrationElements);
      localStorage.setItem('loginUsers', JSON.stringify(this.loginUsers));
      this.registrationElements = {
        userName: '',
        email: '',
        password: '',
        address: '',
      };

      this.snackBar.open('Sikeres regisztráció!', this.action, this.configSuccess);
    } else {
      this.snackBar.open('Sikertelen regisztráció! A felhasználónév vagy e-mail cím foglalt!', this.action, this.configSuccess);
    }
  }

  onLogin(): void {
    const isUserExist = this.loginUsers.find(exist => exist.userName === this.loginElements.userName && exist.password === this.loginElements.password);
    if (isUserExist !== undefined && this.loginElements.userName !== 'admin' && this.loginElements.password !== 'admin') {
      this.snackBar.open('Sikeresen bejelentkezve!', this.action, this.configSuccess);
      this.isAdmin = false;
      window.location.href = '/home';
    }
    else if (this.loginElements.userName === 'admin' && this.loginElements.password === 'admin') {
      this.snackBar.open('Sikeresen bejelentkezve Adminként!', this.action, this.configSuccess);
      this.isAdmin = true;
      window.location.href = '/admin';
    }
    else {
      this.snackBar.open('Bejelentkezés sikertelen!', this.action, this.configSuccess);
    }
  }
}

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

/*import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isAdmin = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.token);
        console.log(data);
        this.tokenStorage.saveUser(username, data.isAdmin);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.goToVideos();
      },
      (err) => {
        console.log(err.error);
        this.isLoginFailed = true;
      }
    );
  }

  goToVideos(): void {
    window.location.href = '/videos';
  }
}


form: any = {
    username: null,
    password: null,
  };
  usernamee: string = ';';
  passwordd: string = ';';
  isAdmin = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogIn(): void {
    if (this.usernamee === 'admin' && this.passwordd === 'admin' ) {
      this.isAdmin = true;
    }
    else {
      this.isAdmin = false;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.onLogIn(username, password).subscribe(
      (data) => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.goShopping();
      },
      (err) => {
        console.log(err.error);
        this.isLoginFailed = true;
      }
    );
  }

  goShopping(): void {
    window.location.href = '/home';
  }

*/


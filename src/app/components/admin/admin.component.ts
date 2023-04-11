import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  iamAdmin = true;
  sql = '';

  constructor(private loginComponent: LoginComponent) { }

  ngOnInit(): void {
    /*const sqlite3 = require('sqlite3').verbose();

    //connect to db
    const db = new sqlite3.Database('./src/app/sql/database.db', sqlite3.OPEN_READWRITE, (err: { message: any; }) => {
      if (err) return console.error(err.message);
    });*/
  }

  onAdminCheck(): void {
    if (this.loginComponent.isAdmin) {
      this.iamAdmin = true;
    }
    else if (!this.loginComponent.isAdmin) {
      this.iamAdmin = false;
    }
  }

}

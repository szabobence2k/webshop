import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  iamAdmin = true;

  constructor(private loginComponent: LoginComponent) { }

  ngOnInit(): void {
    
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

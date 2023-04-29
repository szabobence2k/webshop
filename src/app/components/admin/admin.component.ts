import { Product } from 'src/app/models/product.model';
import { LoginComponent } from '../login/login.component';
import { Component, OnInit } from '@angular/core';
import { WebshopService } from 'src/app/services/webshop.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  iamAdmin = true;
  products: Product[] = [];
  name: string = '';
  price: number = 0;
  category: string = '';
  description: string = '';
  image: string = '';

  action = 'OK';

  private configSuccess: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  };

  constructor(private loginComponent: LoginComponent, private webshopService: WebshopService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.webshopService.getAllProducts().subscribe(_products => {
      this.products = _products;
    });
  }

  onAdminCheck(): void {
    if (this.loginComponent.isAdmin) {
      this.iamAdmin = true;
    }
    else if (!this.loginComponent.isAdmin) {
      this.iamAdmin = false;
    }
  }

  onAddProduct(): void {
    if (!this.name.trim()) return;

    this.webshopService.addProduct(this.price, this.name, this.category, this.description, this.image).subscribe(_products => {
      this.products.push(_products);
      this.price = 0;
      this.name = '';
      this.category = '';
      this.description = '';
      this.image = '';

      this.snackBar.open('1 termék hozzáadva a listához.', this.action, this.configSuccess);
    });
  }

  onUpdateProduct(product: Product): void {
    this.webshopService.updateProduct(product).subscribe(updatedProduct => {
      const index = this.products.findIndex(p => p.id === updatedProduct.id);
      this.products[index] = updatedProduct;
    });

    this.snackBar.open('1 termék frissítve.', this.action, this.configSuccess);
  }

  onDeleteProduct(product: Product): void {
    this.webshopService.deleteProductById(product.id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== product.id);
    });

    this.snackBar.open('1 termék törölve.', this.action, this.configSuccess);
  }

}

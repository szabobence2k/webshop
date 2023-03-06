import { Component, OnInit } from '@angular/core';
import { Cart } from './models/product.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webshop';

  cart: Cart = {items: []};

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => { this.cart = _cart; });
  }

}

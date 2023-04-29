import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({items: []});

  action = 'OK';

  private configSuccess: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  };

  constructor(private snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    const itemsInCart = items.find((_item) => _item.id === item.id);

    if (itemsInCart) {
      itemsInCart.quantity += 1;
    }
    else {
      items.push(item);
    }

    this.cart.next({ items })

    this.snackBar.open('1 termék hozzáadva a kosárhoz.', this.action, this.configSuccess );
  }

  getTotal(items: Array<CartItem>): number {
    return items.
      map((item) => item.price * item.quantity)
      .reduce((previous, current) => previous + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this.snackBar.open('Összes termék eltávolítva a kosárból.', this.action, this.configSuccess );
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem> {
    const filteredItems = this.cart.value.items.filter((_item) => _item.id !== item.id);

    if (update) {
      this.cart.next({ items: filteredItems });

      this.snackBar.open('1 termék eltávolítva a kosárból.', this.action, this.configSuccess );
    }

    return filteredItems;
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;
    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        this.snackBar.open('1 termék eltávolítva a kosárból.', this.action, this.configSuccess );
        if (_item.quantity === 0) {
          itemForRemoval = _item;
          this.snackBar.open('A kosár üres.', this.action, this.configSuccess );
        }
      }
      return _item;
    });

    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }

    this.cart.next({ items: filteredItems });
  }
}

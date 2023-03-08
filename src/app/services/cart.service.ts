import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []});

  constructor(private _snackBar: MatSnackBar) { }

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

    this._snackBar.open('1 termék hozzáadva a kosárhoz.', 'Rendben', { duration: 5000 });
  }

  getTotal(items: Array<CartItem>): number {
    return items.
      map((item) => item.price * item.quantity)
      .reduce((previous, current) => previous + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('Összes termék eltávolítva a kosárból.', 'Rendben', { duration: 5000 });
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem> {
    const filteredItems = this.cart.value.items.filter((_item) => _item.id !== item.id);

    if (update) {
      this.cart.next({ items: filteredItems });

      this._snackBar.open('1 termék eltávolítva a kosárból.', 'Rendben', { duration: 5000 });
    }

    return filteredItems;
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;
    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        this._snackBar.open('1 termék eltávolítva a kosárból.', 'Rendben', { duration: 5000 });
        if (_item.quantity === 0) {
          itemForRemoval = _item;
          this._snackBar.open('A kosár üres.', 'Rendben', { duration: 5000 });
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
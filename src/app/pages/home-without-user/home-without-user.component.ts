import { WebshopService } from '../../services/webshop.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart, CartItem, Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROW_HEIGHT: { [id: number]: number } = { 1:400, 3:335 };

@Component({
  selector: 'app-home-without-user',
  templateUrl: './home-without-user.component.html',
  styleUrls: ['./home-without-user.component.css']
})
export class HomeWithoutUserComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight = ROW_HEIGHT[this.cols];
  category: string | undefined;
  products: Product[] = [];
  sort = 'desc';
  count = '10';
  productsSubscription: Subscription | undefined;

  
  private _cart: Cart = {items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((previous, current) => previous + current, 0);
  }

  constructor(private cartService: CartService, private webshopService: WebshopService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.webshopService.getAllProducts(this.count, this.sort, this.category)
      .subscribe(products => this.products = products);
  }

  onCategorySelected(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }

  onColumnsCountChange(columnsNum: number): void {
    this.cols = columnsNum;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.name,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  onItemsCountChange(newCount: number): void {
    this.count = newCount.toString();
    this.getProducts();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  OnClearCart(): void {
    this.cartService.clearCart();
  }
}

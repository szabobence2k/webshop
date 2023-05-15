import { WebshopService } from '../../services/webshop.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROW_HEIGHT: { [id: number]: number } = { 1:400, 3:335 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight = ROW_HEIGHT[this.cols];
  category: string | undefined;
  products: Product[] = [];
  sort = 'desc';
  count = '10';
  productsSubscription: Subscription | undefined;

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

}

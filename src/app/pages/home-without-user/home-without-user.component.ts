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
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string | undefined;
  sort = 'desc';
  count = '10';
  productsSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private webshopService: WebshopService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.webshopService.getAllProducts(this.count, this.sort).subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
      this.categories = Array.from(new Set(data.map(product => product.category)));
    });
  }

  filterProducts(): void {
    if (this.selectedCategory === undefined) {
      this.filteredProducts = this.products;
    } else {
      this.webshopService.getProductsByCategory(this.selectedCategory).subscribe(products => {
        this.filteredProducts = products;
      });
    }
  }

  onCategorySelected(newCategory: string): void {
    this.selectedCategory = newCategory;
    this.getProducts();
    console.log(this.selectedCategory);
    console.log(this.categories[0]);
    console.log(this.filteredProducts[0].name);
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

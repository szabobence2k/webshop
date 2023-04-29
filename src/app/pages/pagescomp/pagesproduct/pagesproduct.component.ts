import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-pagesproduct',
  templateUrl: './pagesproduct.component.html',
  styleUrls: ['./pagesproduct.component.css']
})
export class PagesproductComponent {

  @Input() fullWidthMode = false;

  @Input() product: Product | undefined;

  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}

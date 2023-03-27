import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-pagesproduct',
  templateUrl: './pagesproduct.component.html',
  styleUrls: ['./pagesproduct.component.css']
})
export class PagesproductComponent implements OnInit {

  @Input() fullWidthMode = false;

  @Input() product: Product | undefined;
  
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onaddToCart(): void {
    this.addToCart.emit(this.product);
  }
}

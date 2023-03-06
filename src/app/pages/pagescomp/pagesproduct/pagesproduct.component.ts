import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-pagesproduct',
  templateUrl: './pagesproduct.component.html',
  styleUrls: ['./pagesproduct.component.css']
})
export class PagesproductComponent implements OnInit {

  @Input() fullWidthMode = false;

  product: Product | undefined = {
    id: 1,
    price: 4000,
    title: 'Gumi',
    category: 'Autók',
    description: 'vmi',
    image: 'https://via.placeholder.com/150',
  };
  
  @Output() addToCart = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onaddToCart(): void {
    this.addToCart.emit(this.product);
  }
}

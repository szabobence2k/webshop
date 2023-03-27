import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class WebshopService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(show = '10', sort = 'desc', category?: string): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>> (
      `${STORE_URL}/products${category ? '/category/' + category : ''}?sort=${sort}&limit=${show}`
    )
  }

  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>> (
      `${STORE_URL}/products/categories`
    )
  }  
}

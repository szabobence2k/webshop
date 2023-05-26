import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_URL = 'http://localhost:3000/api/products';

@Injectable({
  providedIn: 'root'
})
export class WebshopService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(show = '10', sort = 'desc'): Observable<Product[]> {
    return this.httpClient.get<Product[]>(STORE_URL);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const url = `${STORE_URL}?category=${category}`;
    return this.httpClient.get<Product[]>(url);
  }

  getAllCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>("http://localhost:3000/api/products/category");
  }


  addProduct(price: number, name: string, category: string, description: string, image: string): Observable<Product> {
    return this.httpClient.post<Product>(STORE_URL, { price, name, category, description, image });
  }

  updateProduct(product: Product): Observable<Product> {
    const { id, price, name, category, description, image } = product;
    return this.httpClient.put<Product>(`${STORE_URL}/${id}`, { price, name, category, description, image });
  }

  deleteProductById(id: number): Observable<any> {
    return this.httpClient.delete(`${STORE_URL}/${id}`);
  }
}

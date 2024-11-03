import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../interface/product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  getProduct(id: number) {
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }
}

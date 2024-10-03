import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  // Fetch products with pagination, sorting, and limit
  getProducts(limit: number = 5, sort: string = 'asc', page: number = 1, sortBy: string = 'id'): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}?limit=${limit}&sort=${sort}&page=${page}&sortBy=${sortBy}`
    );
  }

   // Delete a product by ID
   deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }
}

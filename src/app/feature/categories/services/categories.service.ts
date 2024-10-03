import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../products/interfaces/product.type';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiUrl = 'https://fakestoreapi.com/products/categories'; // API for fetching categories
  private categoryProductsUrl = 'https://fakestoreapi.com/products/category'; // API for fetching products by category

  constructor(private http: HttpClient) {}

  // Fetch all categories (returns an array of strings)
  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  // Fetch products by category
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.categoryProductsUrl}/${category}`);
  }

  // Add, update, delete category are mocked for now
  // Add a new category (Mocked since API does not provide this endpoint)
  addCategory(category: string): Observable<string> {
    return new Observable(observer => {
      observer.next(category);
      observer.complete();
    });
  }

  // Update a category (Mocked since API does not provide this endpoint)
  updateCategory(id: number, category: string): Observable<string> {
    return new Observable(observer => {
      observer.next(category);
      observer.complete();
    });
  }

  // Delete a category (Mocked since API does not provide this endpoint)
  deleteCategory(category: string): Observable<void> {
    return new Observable(observer => {
      observer.complete();
    });
  }
}

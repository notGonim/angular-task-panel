import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fakestoreapi.com/auth/login';  
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Login using the API and store JWT token
  login(credentials: { username: string, password: string }) {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      map(response => {
        if (response && response.token) {
          // Store the JWT token in local storage
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.currentUserSubject.next(response);
        }
        return response;
      })
    );
  }

  // Logout and remove JWT token from local storage
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  // Get the current logged-in user
  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  // Check if user is authenticated (JWT token exists)
  isAuthenticated(): boolean {
    return !!this.currentUserValue?.token;
  }
}

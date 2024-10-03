import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/feature/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() headerTitle: string = '';
  dropdownOpen = false; 


  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Logout function
  logout() {
    this.authService.logout();  // Call the logout method in AuthService
  }

   // Check if the user is authenticated
   isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}

import { Component } from '@angular/core';
import { AuthService } from './feature/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  headerTitle = 'Admin Panel'; 
  isSidebarCollapsed = false;  
  collapsed = true;
  isDesktop = window.innerWidth >= 1024;

  constructor( private authService: AuthService) {}

  ngOnInit() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  // Handle window resize event
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth >= 1024;
    if (this.isDesktop) {
      this.collapsed = false; 
    }
  }

  // Toggle sidebar collapse state
  onToggleSidebar() {
    this.collapsed = !this.collapsed;
  }

   // Routes for sidebar navigation
   routes = [
    {
      path: '/products',
      name: 'Products',
      children: [
      // if we need to add sub-routes it should be here 
      ]
    },
    { path: '/categories', name: 'Categories' },
  ];

  // Toggle sidebar collapse state
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  // check if the user is authenticated
isAuthenticated(): boolean {
  return this.authService.isAuthenticated();
}





}

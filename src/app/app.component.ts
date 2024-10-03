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

  onResize(event: any) {
    this.isDesktop = event.target.innerWidth >= 1024;
    if (this.isDesktop) {
      this.collapsed = false; // Show the sidebar on desktop
    }
  }

  onToggleSidebar() {
    this.collapsed = !this.collapsed;
  }


  constructor( private authService: AuthService) {}
  

  ngOnInit() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

   // Routes for sidebar navigation
   routes = [
    {
      path: '/products',
      name: 'Products',
      children: [
      
      ]
    },
    { path: '/categories', name: 'Categories' },
  ];

  // Toggle sidebar collapse state
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

isAuthenticated(): boolean {
  return this.authService.isAuthenticated();
}





}

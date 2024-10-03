import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() routes: Array<any> = []; 
  @Input() collapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  minimized: boolean = false; 
  
  constructor() { }
  
  ngOnInit(): void {
  }

  // Toggle sidebar event
  onToggleSidebar() {
    this.toggleSidebar.emit(); 
  }
  
  // Toggle sidebar state
  toggleSidebarState() {
    this.minimized = !this.minimized;
  }
  

}

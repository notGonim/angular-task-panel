import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component'; 


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
    
  ]
})
export class CoreModule { }

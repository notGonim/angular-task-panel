import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    CommonModule,CategoriesRoutingModule,HttpClientModule,ReactiveFormsModule,MatIconModule 
  ]
})
export class CategoriesModule { }

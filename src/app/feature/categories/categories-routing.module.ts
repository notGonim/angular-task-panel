import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
    { path: '', component: CategoriesComponent },             // List categories
    { path: 'add', component: CategoryComponent },            // Add category
    { path: 'view/:id', component: CategoryComponent },       // View category details
    { path: 'edit/:id', component: CategoryComponent },       // Edit category
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

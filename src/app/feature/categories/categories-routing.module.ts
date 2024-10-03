import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
    { path: '', component: CategoriesComponent },             
    { path: 'add', component: CategoryComponent },            
    { path: 'view/:id', component: CategoryComponent },       
    { path: 'edit/:id', component: CategoryComponent },       
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

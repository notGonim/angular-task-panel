import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    SearchComponent,
    CategoryFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchComponent,
    CategoryFilterComponent
  ]
})
export class SharedModule { }

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent {
  @Input() categories: string[] = [];  
  @Output() categoryChange: EventEmitter<string> = new EventEmitter<string>();

  selectedCategory: string = ''; 

  onCategoryChange() {
    this.categoryChange.emit(this.selectedCategory); 
  }
}

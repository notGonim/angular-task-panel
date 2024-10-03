import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];  // List of category names
  isLoading = false;
  showDeletePopup = false;    // Tracks whether the delete popup is visible
  categoryToDelete: string | null = null;  // The category being deleted

  constructor(private categoriesService: CategoriesService, private router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  // Load categories from the API
  loadCategories() {
    this.isLoading = true;
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
      this.isLoading = false;
    });
  }

  // Navigate to the add category page
  onAddCategory() {
    this.router.navigate(['/categories/add']);
  }

  // Navigate to the view category page
  onViewCategory(category: string) {
    this.router.navigate([`/categories/view/${category}`]);
  }

  // Navigate to the edit category page
  onEditCategory(category: string) {
    this.router.navigate([`/categories/edit/${category}`]);
  }

 // Trigger the delete popup
 onDeleteCategory(category: string) {
  this.categoryToDelete = category;
  this.showDeletePopup = true;  // Show delete confirmation popup
}

// Confirm deletion of the category
confirmDelete() {
  if (this.categoryToDelete) {
    this.categories = this.categories.filter(c => c !== this.categoryToDelete);
    this.showDeletePopup = false;
    this.categoryToDelete = null;

    // Perform API delete action if needed
    // this.categoriesService.deleteCategory(this.categoryToDelete).subscribe(() => this.loadCategories());
  }
}

// Cancel the delete action
cancelDelete() {
  this.showDeletePopup = false;
  this.categoryToDelete = null;
}
}



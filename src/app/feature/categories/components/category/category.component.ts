import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;
  mode:string='add';
  categoryName: string | null = null;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required]  
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('id'); 

      // Determine the mode (add, edit, view) based on the route
      if (this.router.url.includes('/add')) {
        this.mode = 'add';
      } else if (this.router.url.includes('/edit')) {
        this.mode = 'edit';
        this.loadCategory(this.categoryName!);
      } else if (this.router.url.includes('/view')) {
        this.mode = 'view';
        this.loadCategory(this.categoryName!);
      }
    });
  }

  // Load the category details for editing or viewing
  loadCategory(categoryName: string) {
    this.isLoading = true;
    this.categoriesService.getCategories().subscribe((categories) => {
      const category = categories.find(c => c === categoryName);
      if (category) {
        this.categoryForm.patchValue({ name: category });
      }
      this.isLoading = false;
    });
  }

  // Handle form submission for adding or editing a category
  onSubmit() {
    if (this.categoryForm.invalid) return;

    const categoryName = this.categoryForm.value.name;

    if (this.mode === 'add') {
      // Add a new category
      this.categoriesService.addCategory(categoryName).subscribe(() => {
        this.router.navigate(['/categories']);  // Redirect to categories list
      });
    } else if (this.mode === 'edit') {
      // Update the existing category
      this.categoriesService.getCategories().subscribe((categories) => {
        const index = categories.indexOf(this.categoryName!);
        this.categoriesService.updateCategory(index, categoryName).subscribe(() => {
          this.router.navigate(['/categories']);  // Redirect to categories list
        });
      });
    }
  }

  // Navigate back to the list of categories
  onBack() {
    this.router.navigate(['/categories']);
  }
}

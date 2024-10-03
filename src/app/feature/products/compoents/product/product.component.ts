import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  mode: 'add' | 'edit' | 'view' = 'add';
  productId: number | null = null;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: [0, Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Get the mode from the route (add, edit, view)
    this.route.url.subscribe(url => {
      if (url[0].path === 'add') {
        this.mode = 'add';
      } else if (url[0].path === 'edit') {
        this.mode = 'edit';
        this.productId = +this.route.snapshot.paramMap.get('id')!;
        this.loadProduct();
      } else if (url[0].path === 'view') {
        this.mode = 'view';
        this.productId = +this.route.snapshot.paramMap.get('id')!;
        this.loadProduct();
        this.productForm.disable(); // Disable form in view mode
      }
    });
  }

  // Load the product data if in edit or view mode
  loadProduct() {
    if (this.productId) {
      this.isLoading = true;
      this.productService.getProductById(this.productId).subscribe(
        (product) => {
          this.productForm.patchValue(product);
          this.isLoading = false;
        },
        (error) => {
          console.error('Failed to load product', error);
          this.isLoading = false;
        }
      );
    }
  }

  // Handle form submission
  onSubmit() {
    if (this.productForm.invalid) return;

    const productData = this.productForm.value;

    if (this.mode === 'add') {
      // Add product
      this.productService.addProduct(productData).subscribe((response) => {
        this.router.navigate(['/products']); // Redirect to product list
      });
    } else if (this.mode === 'edit' && this.productId) {
      // Edit product
      this.productService.updateProduct(this.productId, productData).subscribe((response) => {
        this.router.navigate(['/products']); // Redirect to product list
      });
    }
  }
}

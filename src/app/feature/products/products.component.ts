import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { finalize } from 'rxjs/operators';
import { ProductsService } from './services/products.service';
import { Product } from './interfaces/product.type';
import { DeleteConfirmationDialogComponent } from './compoents/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'title', 'price', 'category', 'description', 'actions'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>();
  isLoading = true; // Flag to track loading state
  showDeleteModal = false; // Controls the visibility of the delete modal
  selectedProductId: number | null = null; // Stores the product ID to delete

  products: any[] = [];           // All products
  filteredProducts: any[] = [];   // Filtered products
  categories: string[] = ['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];  // Example categories


  limit = 5; // Items per page
  totalProducts = 100; // This is a placeholder. You should fetch this from the API.
  sortDirection = 'asc'; // Sort direction (asc/desc)
  currentPage = 1; // Current page number
  sortColumn = 'id'; // Column to sort by

  constructor(private productService: ProductsService, public dialog: MatDialog,private router: Router) {}

  ngOnInit() {
    this.fetchProducts(); // Fetch initial products
 this.loadProducts(); // Load products from the API
  }
 // Load products from the API
 loadProducts() {
  this.productService.getProducts().subscribe((data) => {
    this.products = data;
    this.filteredProducts = data;  // Set initial filtered products
  });
}

// Handle search input
onSearchChange(searchTerm: string) {
  this.filterProducts(searchTerm, null);
  this.dataSource.data = this.filteredProducts;

}

// Handle category filter
onCategoryChange(category: string) {
  this.filterProducts(null, category);
  this.dataSource.data = this.filteredProducts;

}

// Filter products by search term and category
filterProducts(searchTerm: string | null, category: string | null) {
  this.filteredProducts = this.products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSearch = searchTerm ? product.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    return matchesCategory && matchesSearch;
  });
}
  // Fetch products with pagination and sorting
  fetchProducts() {
    this.isLoading = true; // Start loading
    this.productService
      .getProducts(this.limit, this.sortDirection, this.currentPage, this.sortColumn)
      .pipe(finalize(() => (this.isLoading = false))) // Stop loading after request completes
      .subscribe((data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        // Optionally, you can update `totalProducts` dynamically if your API returns the total count
        // this.totalProducts = someApiResponse.totalProducts;
      });
  }

  // Handle sorting change
  sortData(event: any) {
    this.sortColumn = event.active; // Get column being sorted
    this.sortDirection = event.direction || 'asc'; // Get sort direction
    this.fetchProducts(); // Re-fetch products when sorting changes
  }

  // Handle pagination and perPage change
  pageChanged(event: any) {
    this.currentPage = event.pageIndex + 1; // Page index is 0-based, so we add 1
    this.limit = event.pageSize; // Set the new items per page
    this.fetchProducts(); // Re-fetch products based on new page or limit
  }
   // Open delete confirmation dialog
  


// Handle delete action
onDelete(productId: number): void {
  const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.productService.deleteProduct(productId).subscribe(() => {
        this.fetchProducts(); // Refresh the table after deletion
      });
    }
  });
}




  // Open the delete modal
  openDeleteModal(productId: number): void {
    this.selectedProductId = productId;
    this.showDeleteModal = true;
  }
// Close the modal
closeModal(): void {
  this.showDeleteModal = false;
  this.selectedProductId = null;
}

// Confirm deletion
confirmDelete(): void {
  if (this.selectedProductId !== null) {
    this.deleteProduct(this.selectedProductId);
    this.closeModal(); // Close the modal after confirming deletion
  }
}

// Simulate product deletion (you would replace this with a service call)
deleteProduct(productId: number): void {
 this.productService.deleteProduct(productId).subscribe(() => {
    this.fetchProducts();     
 });
}


// Function to navigate to the Add Product page
onAddProduct() {
  this.router.navigate(['/products/add']);
}

// Function to navigate to the View Product page
onViewProduct(productId: number) {
  this.router.navigate([`/products/view/${productId}`]);
}

// Function to navigate to the Edit Product page
onEditProduct(productId: number) {
  this.router.navigate([`/products/edit/${productId}`]);
}


}

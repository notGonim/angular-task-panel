import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './compoents/product/product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DeleteConfirmationDialogComponent } from './compoents/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatMenuModule } from '@angular/material/menu'; 
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    CommonModule,ProductsRoutingModule,MatTableModule,MatPaginatorModule,MatSortModule,HttpClientModule,
    MatIconModule ,MatDialogModule,MatButtonModule,MatMenuModule,OverlayModule,ReactiveFormsModule, 
SharedModule    
  ],
  exports: [
    ProductsComponent,
    ProductComponent
  ]
})
export class ProductsModule { }

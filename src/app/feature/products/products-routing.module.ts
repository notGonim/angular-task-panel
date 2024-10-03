import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './compoents/product/product.component';

const routes: Routes = [
    {path:"",component:ProductsComponent},
    { path: 'add', component: ProductComponent },
    { path: 'edit/:id', component: ProductComponent },
    { path: 'view/:id', component: ProductComponent },
    // Other routes...
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

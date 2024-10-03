import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule),  
  },
  {
    path: 'products',
    loadChildren: () => import('./feature/products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuard],  
  },
  {
    path: 'categories',
    loadChildren: () => import('./feature/categories/categories.module').then(m => m.CategoriesModule),
    canActivate: [AuthGuard],  },
  {
    path: '',
    redirectTo: 'login',  
    pathMatch: 'full',
  },
  {
    path: '**',  
    component: NotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

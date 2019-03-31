import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes =  [
  { 
    path: 'product-details', 
    component: ProductDetailsComponent },
  {
    path: 'products',
    component: ProductListComponent,
    data: { title: 'Product List' }
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

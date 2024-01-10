import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [{ path: '', component: HeadBarComponent },
{path: 'liste', component: ProductListComponent},
{path: 'update', component: UpdateProductComponent},
{path: 'detail', component: ProductDetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

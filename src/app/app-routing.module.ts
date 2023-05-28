import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: "", children: [
      {
        path: "", component: HomePageComponent
      },
      {
        path: "product", component: ProductPageComponent
      },
      {
        path: "product/:id", component: ProductDetailComponent
      }
    ]
  },
  {
    path: "admin", children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full"},
      { path: "dashboard", component: DashboardComponent},
      { path: "product", component: AdminProductComponent},
      { path: "product/add", component: ProductAddComponent},
      { path: "product/:id/edit", component: ProductEditComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

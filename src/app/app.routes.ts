import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { loginGuard } from './guards/login.guard';


export const routes: Routes = [

    {path:"",pathMatch:"full", component:ProductComponent},
{path: "products", component:ProductComponent},
{path: "products/category/:categoryId", component:ProductComponent},
{ path: "products/add", component:ProductAddComponent,},
{ path: "login", component:LoginComponent},

   
];



export const appRoutes = provideRouter(routes);
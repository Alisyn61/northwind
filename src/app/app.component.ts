import { Component } from '@angular/core';
import {  RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NaviComponent } from "./components/navi/navi.component";
import { CategoryComponent } from "./components/category/category.component";
import { ProductComponent } from "./components/product/product.component";
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';









@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NaviComponent, CategoryComponent,ToastrModule
  ,RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
 
})


export class AppComponent {
  title: string = 'northwind';
  user: string = "engin demiroğ"
 

}

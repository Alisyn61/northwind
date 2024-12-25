import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { ProductComponent } from '../product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from '../category/category.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Product } from '../../models/product';


@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule
  
  ],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit{


cartItems:CartItem[] = [];

constructor(private cartService:CartService,
  private toastrService:ToastrService

){}

ngOnInit(): void{

this.getCart();

}

getCart(){
  this.cartItems= this.cartService.list();
}


removeFromCart(product:Product){

this.cartService.removeFromCart(product);
this.toastrService.error("silindi",product.productName + "sepetten silindi")
}


}

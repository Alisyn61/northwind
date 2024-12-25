import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { __param } from 'tslib';
import { VatAddedPipe } from '../../pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from '../../pipes/filter-pipe.pipe';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartService } from '../../services/cart.service';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { NaviComponent } from '../navi/navi.component';
import { CategoryComponent } from '../category/category.component';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,VatAddedPipe,FormsModule,FilterPipePipe, ToastrModule , RouterModule,HttpClientModule
    
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
  
})
export class ProductComponent implements OnInit {


  products:Product[] = 
  [];
 dataLoaded=false;
 filterText="";

  constructor(private productService:ProductService,
     private activatedRoute:ActivatedRoute,
     private toastrService:ToastrService,
     private cartService:CartService
    
    ){}

ngOnInit(): void {
  
this.activatedRoute.params.subscribe(params=>{

  if(params["categoryId"]){
    this.getProductsByCategory(params["categoryId"])

  }else{


    this.getProducts();
  }

})

}

getProducts(){

this.productService.getProducts().subscribe(response=>
{
  console.log("Ürünler API'den döndü:", response);
this.products=response.data
this.dataLoaded=true;
})

};

getProductsByCategory(categoryId:number){

  this.productService.getProductsByCategory(categoryId).subscribe(response=>
  {
  this.products=response.data
  this.dataLoaded=true;
  })
  
  }


  addToCart(product:Product){
    this.toastrService.success("Sepete eklendi",product.productName)
  this.cartService.addToCart(product);
  }


}
  



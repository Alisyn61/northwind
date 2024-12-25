import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

categories : Category [] = [];

currentCategory: Category;

constructor(private categoryService:CategoryService) {
  
}


ngOnInit():void{

  this.getCategories();

}

getCategories(){

  this.categoryService.getCategories().subscribe(response=>
  {
    console.log("Kategoriler API'den döndü:", response); 
  this.categories=response.data
  
  })
  
  };

  setCurrentCategory(category:Category){
 
    this.currentCategory=category
   }
 
   getCurrentCategoryClass(category:Category){
 
     if(category==this.currentCategory){
     return  "list-group-item active"
     
     }else {
     
     
       return "list-group-item"
     }
     
     }
 


getAllCategoryClass(){
 
     if(!this.currentCategory){
     return  "list-group-item active"
     
     }else {
     
     
       return "list-group-item"
     }
     
     }
 
 
 
 }

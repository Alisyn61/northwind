import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup , FormBuilder,FormControl,Validators} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { response } from 'express';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit{


  productAddForm: FormGroup;
constructor(private formBuilder:FormBuilder,private productService:ProductService, private toastrService:ToastrService       ){}

ngOnInit(): void {
  this.createProductAddForm();
}

createProductAddForm(){

  this.productAddForm= this.formBuilder.group(
    {
      productName:["",Validators.required],
      unitPrice: ["",Validators.required],
      unitsInStock: ["",Validators.required  ],
      categoryId: ["",Validators.required]


    }
  )
}


add() {
  if (this.productAddForm.valid) {
    let productModel = Object.assign({}, this.productAddForm.value);
    this.productService.add(productModel).subscribe({
      next: (response) => {
        this.toastrService.success(response.message, "Başarılı");
      },
      error: (responseError) => {
        // Errors dizisinin var olup olmadığını kontrol ediyoruz
        if (responseError.error && responseError.error.Errors && responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(
              responseError.error.Errors[i].ErrorMessage,
              "Doğrulama hatası"
            );
          }
        } else {
          // Eğer Errors dizisi yoksa veya boşsa, genel bir hata mesajı veriyoruz
          this.toastrService.error("Bir hata oluştu. Lütfen tekrar deneyin.", "Hata");
        }
      },
    });
  } else {
    this.toastrService.error("Formunuz eksik", "Dikkat");
  }
}


}



import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder, ReactiveFormsModule  }from "@angular/forms"
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { response } from 'express';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

loginForm:FormGroup;
constructor(private formBuilder:FormBuilder, 
  private authService:AuthService,

private toastrService:ToastrService

) {
  
  
}

  ngOnInit(): void {

    this.createLoginForm();
  }
    


createLoginForm(){ 

this.loginForm = this.formBuilder.group({

email: ["",Validators.required],
password: ["", Validators.required]

})

}

login() {
  if (this.loginForm.valid) {
    console.log(this.loginForm.value);

    let loginModel = Object.assign({}, this.loginForm.value);

    this.authService.login(loginModel).subscribe({
      next: (response) => {
        this.toastrService.success(response.message); // Başarı mesajı
        localStorage.setItem("token", response.data.token); // Token'ı kaydet
      },
      error: (responseError) => {
        this.toastrService.error(
          responseError.error
        ); // Hata mesajı
      },
     
    });
  } 
}





}

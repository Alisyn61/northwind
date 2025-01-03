import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


   apiUrl= "https://localhost:44350/api/auth/"
  constructor(private httpClient:HttpClient) { }


  login(loginModel:LoginModel): Observable<SingleResponseModel<TokenModel>>{

    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }


  isAuthenticated(){

    if(localStorage.getItem("token")){
     
      return true;

    }
    else{

      return false;
    }
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RigisterService {
  userInfo:any;

  constructor(private httpClient:HttpClient) { }

  register(userData:{}){
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData);
  }
  login(userData:{}){
    return this.httpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', userData);
  }

  decodeUser(){
    const encode = localStorage.getItem('etoken') ;
    if(encode !== null){
      const decode = jwtDecode(encode);
      this.userInfo = decode;

    }
  }


}

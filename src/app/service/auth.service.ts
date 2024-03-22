import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {




  constructor(private http:HttpClient) { }
  register(userData:object){
    return this.http.post(`http://localhost:8000/api/register`,userData);
  }
  login(userData:object){
    return this.http.post(`http://localhost:8000/api/login`,userData);
  }

  isLogin(){
    
  }
}

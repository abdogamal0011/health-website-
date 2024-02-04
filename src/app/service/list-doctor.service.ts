import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListDoctorService {

  constructor( private http:HttpClient) { }



  getAllDoctor(){
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }


  pasination(pageNumber : number = 1){
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pageNumber}`)
  }
}

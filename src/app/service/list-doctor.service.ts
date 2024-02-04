import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListDoctor } from '../interface/list-doctor';

@Injectable({
  providedIn: 'root'
})
export class ListDoctorService {

   allDoctor = `https://ecommerce.routemisr.com/api/v1/products` ;

  constructor( private http:HttpClient) { }



  getAllDoctor(){
    return this.http.get(this.allDoctor)
  }


  DoctorDetails(id : string){
    return this.http.get(`${this.allDoctor}/${id}`)
  }

  pasination(pageNumber : number = 1){
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pageNumber}`)
  }
}

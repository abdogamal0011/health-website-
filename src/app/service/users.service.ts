import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class UsersService {
  private baseUrl = 'http://127.0.0.1:8000/api/users';


    private   Authorization = 'Bearer 18|iFSFp0GeMr6hey4dw22pBjISGINJXLk6cAdEOzBE134aa229';


    Header : any = {
      'Authorization': this.Authorization ,
      'Content-Type': 'application/json'
    };
    constructor( private http:HttpClient) { }

    Alluser():Observable<any>{
      return this.http.get(this.baseUrl, { headers : this.Header });
    }
    deleteUser(id:number):Observable<any>{
      return this.http.delete(`http://127.0.0.1:8000/api/users/${id}`, { headers : this.Header });

    }
    updateUser(id:number , userData:object):Observable<any>{
      return this.http.patch(`http://127.0.0.1:8000/api/users/${id}`, { headers : this.Header } ,userData
      );
    }
    oneUser(id:number):Observable<any>{
      return this.http.get(`http://127.0.0.1:8000/api/users/${id}`, { headers : this.Header }
      );
    }
}

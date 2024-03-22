import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsApiService {
  private doctorApi = 'http://127.0.0.1:8000/api/doctors';
  private authToken = 'Bearer 2|LWqqQma0GXrYYYx37Irp7vqZtLT36NS0P84eGJkfbb9e3d4';

  Header : any = {
    'Authorization': this.authToken ,
    'Content-Type': 'application/json'
  };

  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable<any> {
    return this.http.get(this.doctorApi, { headers : this.Header });
  }

  getOneDoctors(id : number ){
    const url = `${this.doctorApi}/${id}`;
    return this.http.get(url , {
      headers : this.Header
    } )
  }


  addDoctor(appointmentData : any): Observable<any>{
    return this.http.post(this.doctorApi, appointmentData, {
      headers: this.Header
    });
  }



  UpdataDoctor(id: number, updatedAppointmentData: any): Observable<any> {
    const url = `${this.doctorApi}/${id}`;
    return this.http.put(url, updatedAppointmentData, { headers : this.Header });
  }


  deleteDoctor(id: number): Observable<any> {
    const url = `${this.doctorApi}/${id}`;
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });

    return this.http.delete(url, { headers });
  }

}

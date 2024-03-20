import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentApiService {

  private appointmentUrl = 'http://127.0.0.1:8000/api/appointments';
  private authToken = 'Bearer 1|uHOQ1lsG7pyxPRTsoq53w7k2NWnBjLp2XdSYzmCV2f0b4b0e';

  Header : any = {
    'Authorization': this.authToken ,
    'Content-Type': 'application/json'
  };

  constructor(private http: HttpClient) { }

  getAllAppointments(): Observable<any> {
    return this.http.get(this.appointmentUrl, { headers : this.Header });
  }

  getOneAppointment(id : number ){
    const url = `${this.appointmentUrl}/${id}`;
    return this.http.get(url , {
      headers : this.Header
    } )
  }


  addAppointment(appointmentData : any): Observable<any>{
    return this.http.post(this.appointmentUrl, appointmentData, {
      headers: this.Header
    });
  }



  updateAppointment(id: number, updatedAppointmentData: any): Observable<any> {
    const url = `${this.appointmentUrl}/${id}`;
    return this.http.put(url, updatedAppointmentData, { headers : this.Header });
  }


  deleteAppointment(id: number): Observable<any> {
    const url = `${this.appointmentUrl}/${id}`;
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });

    return this.http.delete(url, { headers });
  }


}

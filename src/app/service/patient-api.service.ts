import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientApiService {

  private patientApi = 'http://127.0.0.1:8000/api/patients';
  private authToken = 'Bearer 4|YNP3YYmDIPVjmsKsKxNEPAspUSEmqTPgWLHSPy5x5a904eb3';

  Header : any = {
    'Authorization': this.authToken ,
    'Content-Type': 'application/json'
  };

  constructor(private http: HttpClient) { }

  getAllpatients(): Observable<any> {
    return this.http.get(this.patientApi, { headers : this.Header });
  }

  getOnepatient(id : number ){
    const url = `${this.patientApi}/${id}`;
    return this.http.get(url , {
      headers : this.Header
    } )
  }


  addpatient(appointmentData : any): Observable<any>{
    return this.http.post(this.patientApi, appointmentData, {
      headers: this.Header
    });
  }



  Updatapatient(id: number, updatedAppointmentData: any): Observable<any> {
    const url = `${this.patientApi}/${id}`;
    return this.http.put(url, updatedAppointmentData, { headers : this.Header });
  }


  deletepatient(id: number): Observable<any> {
    const url = `${this.patientApi}/${id}`;
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });

    return this.http.delete(url, { headers });
  }


}

import { DoctorsApiService } from './../service/doctors-api.service';
import { Component } from '@angular/core';
import { PatientApiService } from '../service/patient-api.service';
import { pipe } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent {
  patient: any;
  patinetId : number = 0 ;
  docId : number = 0 ;
  doctor :any ;
  constructor(private patientApi:PatientApiService , private doctorsApiService:DoctorsApiService ){

    const isName :any = localStorage.getItem('user')
    const user = JSON.parse(isName);
     this.patinetId = user.id ;
     console.log("hyhyhyhyh",this.patinetId);



    }
  ngOnInit(){
    // location.reload();

    this.patientApi.getOnepatient(this.patinetId).subscribe((data)=>{this.patient= data; console.log(this.patient);
    });
      this.doctorsApiService.getOneDoctors(this.docId).subscribe((res)=>{
        this.doctor = res ;
        console.log("doc" ,res);
       })
    }

}

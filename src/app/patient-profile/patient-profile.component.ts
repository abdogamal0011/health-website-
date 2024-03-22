import { Component } from '@angular/core';
import { PatientApiService } from '../service/patient-api.service';
import { log } from 'console';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [],
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent {
  patient: any;
  constructor(private patientApi:PatientApiService ){
    
  }
  ngOnInit(){
    this.patientApi.getOnepatient(1).subscribe((data)=>{this.patient= data; console.log(this.patient);
    });
  }
}

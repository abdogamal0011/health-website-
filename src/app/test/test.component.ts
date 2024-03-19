import { Component, OnInit } from '@angular/core';
import { AppointmentApiService } from '../service/appointment-api.service';
import { DoctorsApiService } from '../service/doctors-api.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  constructor( private _appointmentApi:AppointmentApiService ,private _doctorApi:DoctorsApiService ){}

  ngOnInit(): void {


    this._appointmentApi.getAllAppointments().subscribe(data=>{  console.log( 'data' , data);} )


    this._doctorApi.getAllDoctors().subscribe(data=> console.log(data))

  }


}

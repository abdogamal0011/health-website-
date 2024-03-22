  import { Component } from '@angular/core';
  import { AppointmentApiService } from '../../service/appointment-api.service';
  import { HttpClient } from '@angular/common/http';
  import { NgClass } from '@angular/common';
  import emailjs from '@emailjs/browser';

  @Component({
    selector: 'app-dash-appointment',
    standalone: true,
    imports: [NgClass],
    templateUrl: './dash-appointment.component.html',
    styleUrl: './dash-appointment.component.css'
  })
  export class DashAppointmentComponent {


    doctorId : number = 1 ;
    appointments : any = {appointments:[]} ;
    data :any ;
    status: string = '';

    constructor(
      private appointmentApi:AppointmentApiService ,
      private http : HttpClient
    ){


    }

    ngOnInit(): void {

  this.showAll()

    }

    onTabClick( status: string): void {
      this.status = status;
      console.log(this.doctorId);
      console.log(status);

      this.appointmentApi.getstatusAppointment(this.doctorId ,status).subscribe((data) => {
        this.appointments = data;
        console.log(this.appointments);
      });
    }


    showAll(){

      this.appointmentApi.getDocAppointment(this.doctorId).subscribe((data) => { this.appointments = data  ; console.log(this.appointments);
      })

    }

  updateAppointment(appointment: any, status: any): void {
    const updatedData = {
        doctor_id: this.doctorId,
        patient_id: appointment.patient.id,
        date: appointment.date,
        price: appointment.price,
        description: appointment.description,
        status: status,
    };

      console.log("Updating appointment with data:", updatedData);

      this.appointmentApi.updateAppointment(appointment.id, updatedData)
          .subscribe(response => {

              console.log("Update successful:", response);

              if (response.data.status == 'completed') {

                this.sendEmail()

              }

              let object = this.appointments.appointments.find((obj: any) => obj.id === appointment.id);
              let index = this.appointments.appointments.indexOf(object);
              this.appointments.appointments[index]=response.data;



          }, error => {
              console.error("Update failed:", error);
          });
        }


        sendEmail(){
          emailjs.init('-uaXut6SA-feg7FEe');

          // Replace placeholders with actual values
          const emailParams = {
            from_name: "Doctor",
            to_name: "Ahmed",
            from_email: "ahmedmanaour990@gmail.com", // Replace with the doctor's email
            to_email: "ahmedmanaour990@gmail.com", // Use the provided patient's email address
            subject: "Appointment Confirmation",
            message: 'emailMessage' // Use the provided email message
          };

          emailjs.send("service_3udjqfc", "template_wgilzxq", emailParams)
            .then(response => {
              console.log('Email sent:', response);
              alert('Email sent');
            })
            .catch(error => {
              console.error('Error sending email:', error);
              alert('Failed to send email');
            });
        }



  }

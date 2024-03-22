import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-dash-appointment',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './dash-appointment.component.html',
  styleUrl: './dash-appointment.component.css'
})export class DashAppointmentComponent {
  // Define your form group
  form: FormGroup = this.fb.group({
    from_name: "Healthws",
    to_name: "Admin",
    from_email: "mazen.akram1999@gmail.com",
    subject: "lorem",
    message: "Accepted",
  });

  constructor(private fb: FormBuilder) {}

  send() {
    // Replace 'YOUR_USER_ID' with your emailJS user ID
    emailjs.init('-uaXut6SA-feg7FEe');

    // Send email
    emailjs.send("service_3udjqfc", "template_wgilzxq", {
      from_name: "Doctor",
      to_name: "patient",
      from_email: "mazen.akram1999@gmail.com",
      subject: "Appointment",
      message: "success"
    }).then(response => {
      console.log('Email sent:', response);
      alert('Email sent');
    }).catch(error => {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    });
  }
}




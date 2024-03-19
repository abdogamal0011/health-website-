import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-apointment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './apointment.component.html',
  styleUrl: './apointment.component.css',
})
export class ApointmentComponent {
  appForm: FormGroup;
  constructor(private fb :FormBuilder) {
    this.appForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      Description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),

      ]),
      Price: new FormControl('', [
        Validators.required,
      ]),
    });
    
  }
  handleSubmitForm(){
    console.log(this.appForm.value);
    
  }
}

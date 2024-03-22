import { CommentsService } from './../service/comments.service';
import { DoctorsApiService } from './../service/doctors-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListDoctorService } from '../service/list-doctor.service';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { ApointmentComponent } from '../apointment/apointment.component';
import { AppointmentApiService } from '../service/appointment-api.service';

// Define the Comment interface
interface Comment {
  text: string;
  user: string;
  date: string;
  rating?: number | null;
}

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css'] ,
  standalone:true ,
  imports : [
    CommonModule ,
    FormsModule ,
    ReactiveFormsModule

  ]
})
export class DoctorDetailsComponent implements OnInit {

  textComment :string = '' ;
  rate : any ;
  doctor: any;
  editIndex: number = -1;
  editedText: string = '';
  hoveredRate: number = 0;
  comments : any[] | undefined ;
  patientId = 1 ;
  doctorId = 0 ;
  appForm: FormGroup;
  doctors: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    // private listDoctorService: ListDoctorService,
    // private apiService: ApiService,
    private  doctorsApiService:DoctorsApiService ,
    private commentApi : CommentsService ,
    private fb: FormBuilder,

    private appointmentApiService: AppointmentApiService,
    private doctorApi: DoctorsApiService

  ) {
    this.appForm = this.fb.group({
      note: ['', [Validators.required, Validators.minLength(3)]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(200),
        ],
      ],
      price: ['', [Validators.required]],
      patient_id: ['', [Validators.required]],
      doctor_id: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });


  }


  appiontmentDate:any ='';

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.doctorId = id ;
    this.doctorsApiService.getOneDoctors(id).subscribe((data)=>{this.doctor = data , console.log(this.doctor)})
    this.commentApi.getAllcomments(id).subscribe(  (data)=>{ this.comments = data.data
      console.log( "comment" , data.data );
    })


  }





  submitForm() {
    const commentData = {
      comment: this.textComment,
      rating: this.rate,
      patient_id: this.patientId,
      doctor_id: this.doctorId
    };


    this.commentApi.addComment(commentData).subscribe(
      (response) => {
        console.log('Comment added successfully:', response);
        this.textComment = '';
        this.rate = 0;
      },
      (error) => {
        console.error('Error adding comment:', error);
      }
    );
  }




  handleSubmitForm() {


    if (this.appForm.valid) {
      const formData ={
        note:this.appForm.get('note')?.value,
        description: this.appForm.get('description')?.value,
        price: this.appForm.get('price')?.value,
        doctor_id:this.appForm.get('doctor_id')?.value ,
        patient_id: this.appForm.get('patient_id')?.value,
        date: this.appForm.get('date')?.value,
        status : 'pending' ,
      };
      console.log(formData);


      this.appointmentApiService.addAppointment(formData).subscribe(
        (response) => {
          console.log('Appointment added successfully:', response);
          this.appForm.reset();
        },
        (error) => {
          console.error('Error adding appointment:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }


  getdate(date: string){
    this.appiontmentDate = date;
    return this.appiontmentDate;
  }




}

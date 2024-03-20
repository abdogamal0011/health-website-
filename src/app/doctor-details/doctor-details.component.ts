import { CommentsService } from './../service/comments.service';
import { DoctorsApiService } from './../service/doctors-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListDoctorService } from '../service/list-doctor.service';
import { ApiService } from '../service/api.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';

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
    FormsModule

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
  doctorId = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    // private listDoctorService: ListDoctorService,
    // private apiService: ApiService,
    private  doctorsApiService:DoctorsApiService ,
    private commentApi : CommentsService

  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];


    this.doctorsApiService.getOneDoctors(id).subscribe((data)=>{this.doctor = data , console.log(data)})
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









}

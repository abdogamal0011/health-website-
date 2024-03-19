<<<<<<< HEAD
import { NgFor } from '@angular/common';
import { ListDoctorService } from './../service/list-doctor.service';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [NgFor , FormsModule],
=======
import { CommentsService } from './../service/comments.service';
import { DoctorsApiService } from './../service/doctors-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListDoctorService } from '../service/list-doctor.service';
import { ApiService } from '../service/api.service';
import { MatDialog } from '@angular/material/dialog';
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
>>>>>>> 6eb406f3a3df5719882368b02d286fdf47652d16
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
<<<<<<< HEAD
  data:any
=======
  editIndex: number = -1;
  editedText: string = '';
  hoveredRate: number = 0;
  comments : any[] | undefined ;
  patientId = 3 ;
  doctorId = 7 ;

>>>>>>> 6eb406f3a3df5719882368b02d286fdf47652d16
  constructor(
    private activatedRoute: ActivatedRoute,
    private listDoctorService: ListDoctorService,
    private apiService: ApiService,
    private dialog: MatDialog  ,
    private  doctorsApiService:DoctorsApiService ,
    private commentApi : CommentsService

  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.listDoctorService.DoctorDetails(id).subscribe((item: any) => {
      this.doctor = item.data;
<<<<<<< HEAD
    });
  }

  addRating(rating: any): void {
    this.listDoctorService.addRating(rating).subscribe(response => {
      // Handle success or error
    });
  }

  getRatings(): void {
    this.listDoctorService.getRatings().subscribe(ratings => {
      // Use ratings data
    });
  }

  editRating(id: number, rating: any): void {
    this.listDoctorService.editRating(id, rating).subscribe(response => {
      // Handle success or error
    });
  }

  deleteRating(id: number): void {
    this.listDoctorService.deleteRating(id).subscribe(response => {
      // Handle success or error
=======
>>>>>>> 6eb406f3a3df5719882368b02d286fdf47652d16
    });

    this.doctorsApiService.getOneDoctors(id).subscribe((data)=> console.log(data))

    this.commentApi.getAllcomments(7).subscribe(  (data)=>{ this.comments = data.data
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


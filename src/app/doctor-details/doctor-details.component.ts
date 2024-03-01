import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListDoctorService } from '../service/list-doctor.service';
import { ApiService } from '../service/api.service';
// import { MatDialog } from '@angular/material/dialog';
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
  submitForm() {
    console.log('Form submitted');
  }
  textComment :string = '' ;
  rate : any ;
  doctor: any;
  comments: Comment[] = [];
  newCommentText: string = '';
  editIndex: number = -1;
  editedText: string = '';
  hoveredRate: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private listDoctorService: ListDoctorService,
    private apiService: ApiService
    // private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.listDoctorService.DoctorDetails(id).subscribe((item: any) => {
      this.doctor = item.data;
    });

    this.apiService.getData().subscribe((data) => {
      this.comments = data.map((doctor: any) => doctor.comment).filter(Boolean).flat();
    });

  }




  hoverStar(rate: number) {
    this.hoveredRate = rate;
  }

  setRating(rating: number) {
    this.rate = rating;
  }

  isStarFilled(star: number): boolean {
    return this.hoveredRate >= star || this.rate >= star;
  }

  addNewComment() {
    const newComment: Comment = {
      text: this.textComment,
      user: 'Abdo Gamal',
      date: new Date().toISOString() ,
      rating: this.rate
    };

    if (!this.comments) {
      console.error("Comments array is not initialized.");
      this.comments = [];
    }

    this.comments.push(newComment);

    this.textComment = '';

    const data = {
      comments: this.comments,
      rate: this.rate
    };

    this.apiService.postData(data).subscribe((response) => {
      console.log("Response from API:", response);
    });
  }

  editComment(index: number) {
    this.editIndex = index;
    this.editedText = this.comments[index].text;
  }

  saveEditedComment() {
    if (this.editIndex !== -1) {
      this.comments[this.editIndex].text = this.editedText;
      this.editIndex = -1;
      this.editedText = '';

      this.updateCommentData();
    }
  }

  cancelEdit() {
    this.editIndex = -1;
    this.editedText = '';
  }

  deleteComment(index: number) {
    this.comments.splice(index, 1);

    this.updateCommentData();
  }

  private updateCommentData() {
    const data = {
      comments: this.comments,
      rate: 1
    };

    this.apiService.putData(this.doctor.id, data).subscribe(() => {
      console.log(data);

    });
  }

    editRating(index: number) {

      const newRating = prompt('Enter the new rating:');


      if (newRating !== null && newRating !== '') {
        this.comments[index].rating = 0;

        this.comments[index].rating = parseInt(newRating);

        console.log(newRating);

      }
    }

  deleteRating(index: number) {
    const confirmed = confirm('Are you sure you want to delete this rating?');
    if (confirmed) {
      this.comments[index].rating = null; // Set the rating to null
      this.updateCommentData(); // Update any data if needed
    }
  }


}


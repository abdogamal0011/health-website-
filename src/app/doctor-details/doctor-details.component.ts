import { NgFor } from '@angular/common';
import { ListDoctorService } from './../service/list-doctor.service';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [NgFor , FormsModule],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.css',
})
export class DoctorDetailsComponent {
  doctor: any;
  data:any
  constructor(
    private activatedRoute: ActivatedRoute,
    private listDoctorService: ListDoctorService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.listDoctorService.DoctorDetails(id).subscribe((item : any) => {
      this.doctor = item.data;
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
    });
  }
}

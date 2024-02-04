import { ListDoctorService } from './../service/list-doctor.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListDoctor } from '../interface/list-doctor';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.css',
})
export class DoctorDetailsComponent {
  doctor: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private listDoctorService: ListDoctorService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.listDoctorService.DoctorDetails(id).subscribe((item : any) => {
      this.doctor = item.data;
      console.log(this.doctor);
    });
  }
}

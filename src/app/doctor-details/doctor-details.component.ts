import { ListDoctorService } from './../service/list-doctor.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.css',
})
export class DoctorDetailsComponent {
  doctor: any;
  api : any ;

  // this data to test function work
  data :any = {
    'name' : "tamer" ,
    "rate" : '50'
}


  constructor(
    private activatedRoute: ActivatedRoute,
    private listDoctorService: ListDoctorService ,
    private apiService:ApiService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.listDoctorService.DoctorDetails(id).subscribe((item : any) => {
      this.doctor = item.data
      console.log(this.doctor);

    });

    this.apiService.getData().subscribe(data => {
       this.api = data
      console.log(this.api);

    }) ;


    this.apiService.postData(this.data).subscribe(item => {
      this.api = item
      console.log("post " , this.api);

    })



  }





  test(){
    this.apiService.patchData(1 , this.data).subscribe(item => {
      this.api = item
      console.log("post " , this.api);

    })
  }



}



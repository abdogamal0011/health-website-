import { Component } from '@angular/core';
import { ListDoctorService } from '../../service/list-doctor.service';
import {ListDoctor} from '../../interface/list-doctor';
import { SearchDoctorPipe } from '../../pipe/search-doctor.pipe';
import { SearchHomePipe } from '../../pipe/search-home.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DoctorsApiService } from '../../service/doctors-api.service';
import { subscribe } from 'diagnostics_channel';
import {MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-list-of-doctors',
  standalone: true,
  imports: [ SearchDoctorPipe ,MatPaginatorModule, NgxPaginationModule , SearchHomePipe , FormsModule , RouterLink],
  templateUrl: './list-of-doctors.component.html',
  styleUrl: './list-of-doctors.component.css'
})
export class ListOfDoctorsComponent {
  inputSearch : string= ''

  products : []=[] ;
  doctors: any;
  pageSize = 4;
  currentPage = 1;
  total :number =0
  constructor(private _doctorApi:DoctorsApiService) {  }

  ngOnInit():void{

       this._doctorApi.getAllDoctors().subscribe(data=> {this.doctors= data.doctors
        console.log(this.doctors);
       })




  }

  getPaginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.doctors.length);
    return this.doctors.slice(startIndex, endIndex);
  }

  onPageChange(pageEvent : any): void {
    this.currentPage = pageEvent.pageIndex + 1;
  }






  // }




}

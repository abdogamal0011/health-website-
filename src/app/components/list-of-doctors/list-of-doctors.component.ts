import { Component } from '@angular/core';
import { ListDoctorService } from '../../service/list-doctor.service';
import {ListDoctor} from '../../interface/list-doctor'
import { SearchDoctorPipe } from '../../pipe/search-doctor.pipe';
import { SearchHomePipe } from '../../pipe/search-home.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-of-doctors',
  standalone: true,
  imports: [ SearchDoctorPipe , NgxPaginationModule , SearchHomePipe , FormsModule],
  templateUrl: './list-of-doctors.component.html',
  styleUrl: './list-of-doctors.component.css'
})
export class ListOfDoctorsComponent {
  inputSearch : string= ''

  products : any ;
  doctors: ListDoctor[]=[];
  pageSize:number = 0; //limit
  curentPage:number = 1;
  total :number =0
  constructor(private listDoctors:ListDoctorService) {  }

  ngOnInit():void{
    this.listDoctors.getAllDoctor().subscribe(
      (AllDoctors)=>{ this.products = AllDoctors;
        this.doctors = this.products.data;
        this.pageSize = this.products.metadata.limit;
        this.curentPage =  this.products.metadata.currentPage;
        this.total =  this.products.results
     }


  );



  }

  pageChanged(event:any):void{
    this.listDoctors.pasination(event).subscribe({
      next:(AllDoctors)=>{ this.products = AllDoctors;
         this.doctors = this.products.data;
         this.pageSize = this.products.metadata.limit;
         this.curentPage =  this.products.metadata.currentPage;
         this.total =  this.products.results
      },


   });

  }




}

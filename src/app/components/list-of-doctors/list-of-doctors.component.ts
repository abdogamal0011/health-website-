import { Component, Renderer2 } from '@angular/core';
import { ListDoctorService } from '../../service/list-doctor.service';
import {ListDoctor} from '../../interface/list-doctor'
import { SearchDoctorPipe } from '../../pipe/search-doctor.pipe';
import { SearchHomePipe } from '../../pipe/search-home.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AppintmentService } from '../../service/appintment.service';
import { response } from 'express';
import { error, log } from 'console';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-of-doctors',
  standalone: true,
  imports: [ SearchDoctorPipe , NgxPaginationModule , SearchHomePipe , FormsModule , RouterLink ],
  templateUrl: './list-of-doctors.component.html',
  styleUrl: './list-of-doctors.component.css'
})
export class ListOfDoctorsComponent {

  inputSearch : string= ''
  data:any;
  products : any ;
  doctors: ListDoctor[]=[];
  pageSize:number = 0; //limit
  curentPage:number = 1;
  total :number =0
  constructor(private listDoctors:ListDoctorService ,
    private Appiotment :AppintmentService ,
    private toastr: ToastrService,
    private _Renderer2:Renderer2
    ) {  }

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

  appiotment(id:string ,elemnt:HTMLButtonElement):void{
    this._Renderer2.setAttribute( elemnt , "disabled" , "true" );
   this.Appiotment.addtoCart(id).subscribe(
    (response)=>{ this.data= response
    this.toastr.success(this.data.message);
    this._Renderer2.removeAttribute( elemnt, "disabled" );
    },

    (error)=>{ this._Renderer2.removeAttribute( elemnt, "disabled" )}
    )

  }



}

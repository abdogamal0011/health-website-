import { Component } from '@angular/core';
import { ListDoctorService } from '../../service/list-doctor.service';
import { ListDoctor } from '../../interface/list-doctor';

@Component({
  selector: 'app-profial',
  standalone: true,
  imports: [],
  templateUrl: './profial.component.html',
  styleUrl: './profial.component.css'
})
export class ProfialComponent {

  products : any ;
  doctors: ListDoctor[]=[];
constructor(private oneDoctor:ListDoctorService){}

ngOnInit():void{
  this.oneDoctor.getAllDoctor().subscribe(
    (AllDoctors)=>{ this.products = AllDoctors;
      this.doctors = this.products.data;
    })
   }

  }

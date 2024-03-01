import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppintmentService } from '../../service/appintment.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit {
  constructor (private Appintments:AppintmentService,   private toastr: ToastrService,
  private Renderer2:Renderer2 ,
  private route:Router){}
  cartDetalis:any = false;
ngOnInit(): void{
  this.Appintments.showCart().subscribe((data) =>{
    this.cartDetalis = data

  }
  )

}

remove(id:string , elment:HTMLButtonElement){
  this.Renderer2.setAttribute(elment,"disabled" , "true");

this.Appintments.removeAppintemt(id).subscribe(
  (data)=>{
    this.cartDetalis = data
    console.log(this.cartDetalis);
    this.toastr.success( "the Appintment is delete ");
  this.Renderer2.removeAttribute(elment,"disabled" );
  },
  (error)=>
 { this.Renderer2.removeAttribute(elment,"disabled" )
 }
)
}

changeCount(count:number , id:string , elment:HTMLButtonElement){

  if(count >=1){

    this.Renderer2.setAttribute(elment,"disabled" , "true");
    this.Appintments.UpdataAppintemt(id , count).subscribe(
      (data)=>{
        this.cartDetalis = data
        this.toastr.success( "the Appintment changed ");
        this.Renderer2.removeAttribute(elment,"disabled" );
      },
      (error)=>
      {
        this.Renderer2.removeAttribute(elment,"disabled" );

      })
    }
  }

  clearAllAppintment(){
    this.Appintments.removeAllAppintemt().subscribe({
      next:(data)=>{
        this.cartDetalis = data
        this.toastr.success( "the All Appintment is delete ");
      },
      error:(error)=>
      {
        console.log(error);
      }
    })
    this.route.navigate(['/doctors'])
  }



  }

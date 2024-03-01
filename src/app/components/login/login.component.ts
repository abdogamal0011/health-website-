import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FormControl, FormControlOptions, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RigisterService } from '../../service/rigister.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  data:any
  errMsg:string ='';
  isLoading:boolean = false;

  constructor(private httpRegister :RigisterService ,private router: Router ){}
  loginForm:FormGroup = new FormGroup({
    email:new FormControl('' , [Validators.required , Validators.email]),
    password:new FormControl('' , [Validators.required , Validators.pattern(/^[a-zA-z0-9_@]{6,}$/)]),

  })


  handleForm():void{
const userData =  this.loginForm.value;
this.isLoading = true;

if(this.loginForm.valid === true){
  this.httpRegister.login(userData).subscribe(
  (response) =>{ this.data= response

    if(this.data.message === "success"){


      localStorage.setItem('etoken',this.data.token)
      this.httpRegister.decodeUser()

      this.isLoading = false;
        this.router.navigate([ ''])
      }

},
 (err) => {this.errMsg = err.error.message
this.isLoading = false;

}
)};

  }
}

import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  data:any;
  error:string = '';
  isLoading:boolean = false;
  constructor(private Auth:AuthService , private Router:Router) {}

  loginForm: FormGroup = new FormGroup({
      email:new FormControl('' ,[ Validators.required , Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
  });

  handleSubmitForm(){

    const userData = this.loginForm.value;
    this.isLoading=true;
    if(this.loginForm.valid === true){
      this.Auth.login(userData).subscribe(
       (res)=>{ this.data = res
        if(this.data.message === "Successfully"){
          this.Router.navigate(['']);
          this.isLoading=false;
        }

       },
       (err)=>{this.error = err.error.message;
       this.isLoading=false;},


      );
    }
  }
}

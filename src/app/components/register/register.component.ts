import { Component, Renderer2 } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  data:any;
  error:string = '';
  isLoading:boolean = false;
  constructor(private Auth:AuthService , private Router:Router , private renderer:Renderer2) {}

  registerForm: FormGroup = new FormGroup({
    name:new FormControl('', [Validators.required ,Validators.minLength(3),Validators.maxLength(20)]),
      email:new FormControl('' ,[ Validators.required , Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
      gender:new FormControl('' ,[ Validators.required ]),
      age:new FormControl('' ,[ Validators.required]),
      number:new FormControl('' ,[Validators.required]),
      is_admin:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      department_id:new FormControl('' ,[Validators.required])
    });


    // confirmPassword(group:FormControl){
    //   const password = group.get('password');
    //   const rePassword = group.get('rePassword');

    //   if(rePassword?.value ==''){
    //     rePassword.setErrors({require:true})
    //   }
    //   else if(password?.value != rePassword?.value ){
    //     rePassword?.setErrors({mismatch:true});
    //   }
    // }

    handleForm(){
      console.log(this.registerForm.value);

      const userData = this.registerForm.value;
      this.isLoading=true;
      if(this.registerForm.valid === true){
        this.Auth.register(userData).subscribe(
         (res)=>{ this.data = res
          if(this.data.message === "successfully"){
            this.Router.navigate(['/login']);
            this.isLoading=false;
          }

         },
         (err)=>{this.error = err.error.message;
         this.isLoading=false;},


        );
      }

    }

    showDepartement() {
      this.renderer.removeClass(document.getElementById('departement'), 'd-none');
    }
    removeDepartement() {
      this.renderer.addClass(document.getElementById('departement'), 'd-none');
    }

}

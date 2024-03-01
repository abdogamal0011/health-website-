import { Component } from '@angular/core';
import {
  FormControl,
  FormControlOptions,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {   RouterLink } from '@angular/router';
import { RigisterService } from '../../service/rigister.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  data:any
  errMsg:string ='';
  isLoading:boolean = false;



  constructor(private httpRegister :RigisterService ,private router: Router ){}
  registerForm:FormGroup = new FormGroup({
    name:new FormControl('', [Validators.required , Validators.minLength(3) ,Validators.maxLength(20)]),
    email:new FormControl('' , [Validators.required , Validators.email]),
    password:new FormControl('' , [Validators.required , Validators.pattern(/^[a-zA-z0-9_@]{6,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('' ,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
  }
  ,{validators:[this.confirmPassword]} as FormControlOptions)

  confirmPassword(group:FormGroup):void{
    const password = group.get('password');
    const rePassword = group.get('rePassword');
    if(rePassword?.value ==""){
      rePassword?.setErrors({requied:true});
    }else if(password?.value !=rePassword?.value){
      rePassword?.setErrors({mismatch:true});
    }
  }
  handleForm():void{
const userData =  this.registerForm.value;
this.isLoading = true;

if(this.registerForm.valid === true){
  this.httpRegister.register(userData).subscribe(
  (response) =>{ this.data= response
    console.log(this.data);

    if(this.data.message === "success"){
this.isLoading = false;
this.router.navigate(['login']);
}

},
 (err) => {this.errMsg = err.error.message
this.isLoading = false;

}
)};

  }
}



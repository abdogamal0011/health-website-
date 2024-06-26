import { Component, OnInit, Renderer2 } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    ReactiveFormsModule , RouterLink
    ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent  {
  data: any;
  error: string = '';
  userId: any = this.route.snapshot.params['id'] ;
  updateData:any;
  dataSend:any;


  constructor(
    private Auth: UsersService,
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router,

  ) {
    this.route.queryParams.subscribe((params: any) => {
      const data = params.data;
      const keyValuePairs = data.split('&');
      const myObject: any = {};
      keyValuePairs.forEach((keyValuePair: any) => {
        const [key, value] = keyValuePair.split('=');
        const decodedValue = decodeURIComponent(value.replace(/\+/g, ' '));
        myObject[key] = decodedValue;
      });
      console.log(myObject);
      this.dataSend=myObject;
      this.updateForm.patchValue(myObject, { emitEvent: true, onlySelf: false });
    });
  }

  updateForm: FormGroup = new FormGroup({
    name: new FormControl('', [ Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [ Validators.email]),
    // password: new FormControl('', [ Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
    // gender: new FormControl('', []),
    // age: new FormControl('', []),
    // number: new FormControl('', []),
    is_admin: new FormControl('', []),
    // address: new FormControl('', []),
    department_id: new FormControl('', [])
  });
  ngOnInit(): void {
   this.AllUser();
        if (this.route.snapshot.paramMap) {
      this.route.params.subscribe(params => {
        this.userId = +params['id'];
      });
    }
  }

  handleForm() {
    console.log(this.updateForm.value);
    let userData = this.updateForm.value;
    if (this.updateForm.valid === true) {
      this.Auth.updateUser(this.dataSend.id, userData).subscribe(
        (res) => {
          this.data = res;
          if (this.data.message === 'successfully') {
            console.log("successfully updated");
            this.router.navigate(['/admin/dashadmin']);
          }
        },
        (err) => {
          this.error = err.error.message;
        }
      );
    }
  }
  showDepartement() {
    this.renderer.removeClass(document.getElementById('departement'), 'd-none');
  }
  removeDepartement() {
    this.renderer.addClass(document.getElementById('departement'), 'd-none');
  }

  AllUser(){
    this.Auth.oneUser(this.userId).subscribe(
      (res) => {
        this.data = res;
        console.log(this.userId , this.data);

      //   for(let i = 0; i <= this.userId ; i++){
      //     if(this.data.users[i].id === this.userId){
      //    this.updateData =this.updateForm.setValue({
      //         name: this.data.users[i].name,
      //         email: this.data.users[i].email,
      //         gender: this.data.users[i].gender,
      //         age: this.data.users[i].age,
      //         password: this.data.users[i].password,
      //         number: this.data.users[i].number,
      //         is_admin: this.data.users[i].is_admin,
      //         address: this.data.users[i].address,
      //         department_id: this.data.users[i].department_id
      //       });
      //     }
      //   }
      // },
      // (err) => {
      //   this.error = err.error.message;
      }
    );
  }
}

import { DatePipe, CommonModule } from '@angular/common';
import { DepartmentService } from './../service/department.service';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [DatePipe ,FormsModule , CommonModule ],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {


  departments : any  = [] ;
  selectedDepartment: any;
  departmentData = {
    description: '',
    name: ''
  };
  constructor(private ApiS:DepartmentService){

  }

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    this.selectedDepartment = ''
    this.ApiS.getAllDepartment().subscribe((data:any) => {
      this.departments = data; console.log("hello " , this.departments);

    });
  }

  addDepartment(): void {
    this.ApiS.addDepartment(this.departmentData)
      .subscribe(
        response => {
          console.log(response); // Handle success response
          this.getDepartments() ;
          
        },
        error => {
          console.error(error); // Handle error response
        }
      );
  }


}

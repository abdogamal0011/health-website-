import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DepartmentService } from '../../service/department.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [RouterLink , MatPaginatorModule ],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

  departments : any  = [] ;
  selectedDepartment: any;
  doctors: any[] = [];
  pageSize = 4;
  currentPage = 1;


  constructor(private ApiS:DepartmentService){ }


  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    this.selectedDepartment = ''
    this.ApiS.getAllDepartment().subscribe((data:any) => {
      this.departments = data; console.log("hello " , this.departments);

    });
  }

  showDoctorsByDepartment(departmentName: string) {
    this.selectedDepartment = departmentName;
    this.ApiS.getDepartmentByName(departmentName).subscribe((data:any) => {
      this.doctors = data; console.log('new' , this.selectedDepartment.doctor );

    });
  }


}

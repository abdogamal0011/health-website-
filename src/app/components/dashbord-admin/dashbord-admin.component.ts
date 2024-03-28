import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { error } from 'console';
import { Router, RouterLink, Routes } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-dashbord-admin',
  standalone: true,
  imports: [RouterLink , MatPaginatorModule],
  templateUrl: './dashbord-admin.component.html',
  styleUrl: './dashbord-admin.component.css'
})

export class DashbordAdminComponent {
  data:any
  delete:any
  pageSize = 4;
  currentPage = 1;

  constructor(private _http:UsersService , private Router:Router){}


  ngOnInit(): void{
    this.alluser();
    }
    alluser(){
      this._http.Alluser().subscribe((res)=>{this.data = res.users
        console.log(this.data);
      });
    }

    getPaginatedData(): any[] {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = Math.min(startIndex + this.pageSize, this.data.length);
      return this.data.slice(startIndex, endIndex);
    }

    onPageChange(pageEvent : any): void {
      this.currentPage = pageEvent.pageIndex + 1;
    }


    deleteuser(id:number){
      this._http.deleteUser(id).subscribe((res)=>{this.delete = res

        this.alluser();
      });
    }

    updateUser(data:any){
    // this.Router.navigate(['update-user',id]);
    // this.alluser();
    const queryParams = new URLSearchParams();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key] !== null ? data[key] : "";
        queryParams.set(key, value);
      }
    }
    const queryParamsString = queryParams.toString();
    const routeUrl = `admin/update-user`;
    const navigationExtras = {
      queryParams: { data: queryParamsString }
    };
    this.Router.navigate([routeUrl], navigationExtras);
    }
    addUser(){
      const routeUrl = 'admin/add-user';
      this.Router.navigate([routeUrl]);
    }
}

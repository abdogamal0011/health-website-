import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { error } from 'console';
import { Router, RouterLink, Routes } from '@angular/router';

@Component({
  selector: 'app-dashbord-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashbord-admin.component.html',
  styleUrl: './dashbord-admin.component.css'
})

export class DashbordAdminComponent {
  data:any
  delete:any
  constructor(private _http:UsersService , private Router:Router){}


  ngOnInit(): void{
    this.alluser();
    }
    alluser(){
      this._http.Alluser().subscribe((res)=>{this.data = res
        console.log(this.data);
      });
    }

    deleteuser(id:number){
      this._http.deleteUser(id).subscribe((res)=>{this.delete = res

        this.alluser();
      });
    }

    updateUser(id:number){
    this.Router.navigate(['update-user',id]);
    this.alluser();
    }
}

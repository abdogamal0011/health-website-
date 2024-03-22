import { UsersService } from './../../service/users.service';
import { LocalStorageService } from './../../service/local-storage.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isAuth : boolean = false ;
  user : any ;


  constructor( private LocalStorageApi : LocalStorageService , private userApi :UsersService ){
    const Auth = this.LocalStorageApi.getData('user');
    this.isAuth = !!Auth;

    if (this.isAuth && Auth.id) {
      const id = Auth.id;

      this.userApi.oneUser(id).subscribe((data) => {
        this.user = data;
        console.log("dasdasdasdasdasd" ,this.user);
      });
    }
  }
  }



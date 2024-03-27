import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-user',
  standalone: true,
  imports: [],
  templateUrl: './show-user.component.html',
  styleUrl: './show-user.component.css'
})
export class ShowUserComponent {
  oneUser:any;
constructor(    private activatedRoute: ActivatedRoute,private showUser:UsersService
  ){}
ngOnInit(){

  const id = this.activatedRoute.snapshot.params['id']
  this.showUser.oneUser(id).subscribe(
    data => {
      this.oneUser = data;
      console.log(this.oneUser);


    },
    error => {
      console.log(error);
    }
  );
}
}

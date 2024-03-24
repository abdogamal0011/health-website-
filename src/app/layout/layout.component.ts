import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
    imports: [NavbarComponent, FooterComponent , RouterOutlet]
})
export class LayoutComponent {
  isAuth : boolean=false;
  constructor( private LocalStorageApi : LocalStorageService){}
  ngOnInit():void{
    // const Auth = this.LocalStorageApi.getData('user');
    // console.log(Auth);
    // this.isAuth = !!Auth;
  }
}

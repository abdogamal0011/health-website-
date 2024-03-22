import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { ListOfDoctorsComponent } from './components/list-of-doctors/list-of-doctors.component';
import { CommonModule } from '@angular/common';
import { ProfialComponent } from './components/profial/profial.component';
import { AdminComponent } from "./dashboard/admin/admin.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, ProfialComponent, NavbarComponent, HomeComponent, FooterComponent, RegisterComponent, ListOfDoctorsComponent, AdminComponent]
})
export class AppComponent {
  title = 'Health_Website';
}

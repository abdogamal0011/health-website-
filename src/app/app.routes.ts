import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';

export const routes: Routes = [
  {path: "home" , component: HomeComponent , title:"Home"} ,



  {path:"" , redirectTo:"home" , pathMatch:"full"}
];

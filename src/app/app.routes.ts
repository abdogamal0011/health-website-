
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListOfDoctorsComponent } from './components/list-of-doctors/list-of-doctors.component';
import { Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { MessageComponent } from './components/message/message.component';
import { ProfialComponent } from './components/profial/profial.component';


export const routes: Routes = [

    {
        path: "",
        component: HomeComponent ,
        title: "  Home Page "
    },

    {
        path: "register",
        component: RegisterComponent ,
        title: " Registeration Page "
    },
    {
        path: "login",
        component: LoginComponent ,
        title: "login Page "
    },
    {
        path: "doctors",
        component: ListOfDoctorsComponent ,
        title: "doctors Page "
    } ,
    {
      path:"doctorDetails/:id" ,
      component:DoctorDetailsComponent ,
      title : "details"
    } ,
    {
      path:"profial/:id" ,
      component:ProfialComponent ,
      title : "details"
    } ,


    {
      path:"messages" ,
      component:MessageComponent ,
      title : "message"
    } ,
    {
      path:"doctors/doctorDetails/:id" ,
      redirectTo:"doctorDetails/:id" ,
      pathMatch:"full"

    }


];

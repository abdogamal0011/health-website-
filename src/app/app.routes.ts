
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListOfDoctorsComponent } from './components/list-of-doctors/list-of-doctors.component';
import { Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AppointmentComponent } from './components/appointment/appointment.component';

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent ,
        title: "  Home Page "
    },
    {
        path: "home",
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
        path: "Appointments",
        component: AppointmentComponent ,
        title: "Appointments Page "
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
      path:"doctors/doctorDetails/:id" ,
      redirectTo:"doctorDetails/:id" ,
      pathMatch:"full"

    }

];

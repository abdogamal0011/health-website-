import { ApointmentComponent } from './apointment/apointment.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { MessageComponent } from './components/message/message.component';
import { ProfialComponent } from './components/profial/profial.component';
import { TestComponent } from './test/test.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { LayoutComponent } from './layout/layout.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { AppointmentApiService } from './service/appointment-api.service';
import { DashAppointmentComponent } from './dashboard/dash-appointment/dash-appointment.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { HomeComponent } from './components/home/home.component';
import { ListOfDoctorsComponent } from './components/list-of-doctors/list-of-doctors.component';


export const routes: Routes = [


    {
      path :'home' ,
      component : LayoutComponent ,
      children : [

        {
          path: "",
          component: HomeComponent ,
          title: "  Home Page "
      },

      {
          path: "ap",
          component: ApointmentComponent ,
          title: "  apointment  Page "
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

      } ,


      {
        path:"**" ,
        redirectTo:'home' ,
        pathMatch:'full'
      }

      ]
    } ,


    {
      path : 'admin' ,
      component : AdminComponent ,
      title : "dashboard" ,
      children : [
        {
          path:'' ,
          component : OverviewComponent ,
        },
        {
          path:'home' ,
          component : OverviewComponent ,
        },
        {

          path:'docAppointment' ,
          component : DashAppointmentComponent ,

        } ,
        {

          path:'addAppointment' ,
          component : AddAppointmentComponent ,

        } ,
        {
          path : '**' ,
          redirectTo : 'home'
        }
      ]
    } ,

    {
      path : '**' ,
      redirectTo :'admin' ,
      pathMatch:'full'
    }




];





import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [

    {
        path: "",
        component: HomeComponent ,
        title: "  Home Page "
    },

    {
        path: "Register",
        component: RegisterComponent ,
        title: " Registeration Page "
    },
];
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
 
    {
    path: "",
    component: HomeComponent, title:"Home"
  },
  {
    path: "home",
    component: HomeComponent, title:"Home"
  },
     {
    path: "login",
    component: LoginComponent, title:"login",
  },
     {
    path: "register",
    component: RegisterComponent, title:"register",
  },
];

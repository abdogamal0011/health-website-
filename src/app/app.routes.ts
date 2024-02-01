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

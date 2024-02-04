
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListOfDoctorsComponent } from './components/list-of-doctors/list-of-doctors.component';

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
    }

];

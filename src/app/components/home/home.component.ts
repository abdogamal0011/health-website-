import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';
import { VideoComponent } from '../video/video.component';
import { DepartmentsPartComponent } from '../departments-part/departments-part.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink , PostsComponent , VideoComponent , DepartmentsPartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

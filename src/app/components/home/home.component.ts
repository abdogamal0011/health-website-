import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink , PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

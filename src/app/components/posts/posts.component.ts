import { Component } from '@angular/core';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  post:any;
constructor(private posts:PostsService){}
ngOnInit(){

  this.posts.AllPosts().subscribe(
    (data)=>{
    this.post = data;
    console.log(this.post);
    }
  )
}
}
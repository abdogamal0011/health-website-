import { Component } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  post:any;
constructor(private posts_servieces:PostsService  ){}
ngOnInit(){


  this.posts_servieces.AllPosts().subscribe(
    (data)=>{
    this.post = data;
    }
  )
}

AddPost: FormGroup = new FormGroup({
  title: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ]),

  hint: new FormControl('', [Validators.required]),
  image: new FormControl('', [Validators.required]),
  body: new FormControl('', [Validators.required, Validators.min(10)]),
});

onImageSelected(event: any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.AddPost.patchValue({
      image: file
    });
  }
}

newpost() {
  const formData = new FormData();
  formData.append('title', this.AddPost.value.title);
  formData.append('hint', this.AddPost.value.hint);
  formData.append('image', this.AddPost.value.image);
  formData.append('body', this.AddPost.value.body);

  this.posts_servieces.addPost(formData).subscribe(
    (data) => {
      this.post = data;
      console.log(this.post);
    }
  );
}

}

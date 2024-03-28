import { Component } from '@angular/core';
import { PostsComponent } from '../components/posts/posts.component';
import { PostsService } from '../service/posts.service';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-posts-alone',
  standalone: true,
  imports: [ PostsComponent ,MatPaginatorModule , ReactiveFormsModule],
  templateUrl: './posts-alone.component.html',
  styleUrl: './posts-alone.component.css'
})
export class PostsAloneComponent {

  post:any;
  error: string = '';
  pageSize = 4;
  currentPage = 1;

  constructor(private posts_servieces:PostsService ){}

  ngOnInit(){


    this.posts_servieces.AllPosts().subscribe(
      (res :any)=>{
      this.post = res.data;
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
    if (this.AddPost.valid) {



    } else {
      let errorMessage = 'Please correct the following errors: \n';

      Object.keys(this.AddPost.controls).forEach((controlName) => {
        const control = this.AddPost.get(controlName);
        if (control && control.invalid && control.errors !== null) {
          Object.keys(control.errors).forEach((error) => {
            switch (error) {
              case 'required':
                errorMessage +=` ${controlName} is required.\n`;
                break;
              case 'is_admin':
                errorMessage += `${controlName} is required.\n`;
                break;
              case 'minlength':
                errorMessage += `${controlName} must be at least 6 characters long.\n`;
                break;
              case 'email':
                errorMessage +=` ${controlName} must be a valid email address.\n`;
                break;
              case 'pattern':
                errorMessage +=` ${controlName} contains invalid characters.\n`;
                break;
              case 'min':
                errorMessage += `${controlName} must be greater than 0.\n`;
                break;
              // Add cases for other validation errors as needed
            }
          });
        }
      });

      // Show the error message to the user
      if (this.AddPost.get('is_admin')?.value === 'doctor') {
        errorMessage += `department required.\n`;
      }
      this.error=errorMessage
    }
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

  getPaginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.post.length);
    return this.post.slice(startIndex, endIndex);
  }

  onPageChange(pageEvent : any): void {
    this.currentPage = pageEvent.pageIndex + 1;
  }


}

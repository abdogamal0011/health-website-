import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentApi = 'http://127.0.0.1:8000/api/comments' ;
  private authToken = 'Bearer 3|fKkHnKxbAQL2FSGHr8XwEnhv9qX8ucB4Zjstobkm712c4c4d';

  Header : any = {
    'Authorization': this.authToken ,
    'Content-Type': 'application/json'
  };

  constructor(private http:HttpClient) { }

  getAllcomments(doctorId: number): Observable<any> {
    const url = `${this.commentApi}?doctor_id=${doctorId}`;
    return this.http.get(url, { headers: this.Header });
  }



  addComment(commentData : any): Observable<any>{
    return this.http.post(this.commentApi, commentData, {
      headers: this.Header
    });
  }


  UpdataComment(id: number, updateComment: any): Observable<any> {
    const url = `${this.commentApi}/${id}`;
    return this.http.put(url, updateComment, { headers : this.Header });
  }

  deleteComment(id: number): Observable<any> {
    const url = `${this.commentApi}/${id}`;
    const headers = new HttpHeaders({
      'Authorization': this.authToken
    });

    return this.http.delete(url, { headers });
  }




}

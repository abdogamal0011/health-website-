import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profial',
  standalone: true,
  imports: [NgFor ,RouterLink ,CommonModule],
  templateUrl: './profial.component.html',
  styleUrl: './profial.component.scss'
})
export class ProfialComponent {

  image:any="../../../src/assets/img/avatars/1.jpg"
  arary:string[] =["الدكتور شاطر ", "الكتور حلو ","الدكتور جميل " ,"رائع "];
  array2:number=5
}

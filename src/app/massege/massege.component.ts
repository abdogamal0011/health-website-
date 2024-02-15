import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-massege',
  standalone: true,
  imports: [NgFor , RouterLink],
  templateUrl: './massege.component.html',
  styleUrl: './massege.component.scss'
})
export class MassegeComponent {
  newMessagesCount: number = 0;
  newReviewsCount: number = 3;
  newAppointmentsCount: number = 2;
  messages: string[] = [
    'Ahmed Essam : Hello Doctor How Are You ?  ',
    'Consultation with Dr. Smith at 10:00 AM',
    'Follow-up appointment with patient Jones',
  ];

  constructor() { }

  ngOnInit(): void {
    this.updateNewMessagesCount();
  }

  private updateNewMessagesCount(): void {
    this.newMessagesCount = this.messages.length;
  }



  deleteMessage(index: number): void {
    if (index !== -1) {
      this.messages.splice(index, 1);
      this.updateNewMessagesCount();
    }
  }
}

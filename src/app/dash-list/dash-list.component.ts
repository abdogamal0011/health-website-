import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.css'],
  standalone : true ,
  imports: [CommonModule , DashListComponent]
})


export class DashListComponent {
  reservations: Reservation[] = [
    { id: 1, name: 'Ahmed', phone: '01000000', bookingDate: '1/1/2024', examinationDate: '10/1/2024', status: 'pending' },
    { id: 2, name: 'Mona', phone: '01100000', bookingDate: '11/1/2024', examinationDate: '13/1/2024', status: 'pending' },
    { id: 3, name: 'Mazin', phone: '01200000', bookingDate: '12/1/2024', examinationDate: '15/1/2024', status: 'pending' },
    { id: 4, name: 'Ali', phone: '01300000', bookingDate: '12/1/2024', examinationDate: '15/1/2024', status: 'pending' }
  ];

  constructor() {}

  count : number  = 0;
  acceptReservation(reservation: Reservation) {
    reservation.status = 'accepted';
    this.count++;
  }

  rejectReservation(reservation: Reservation) {
    reservation.status = 'rejected';
    this.count--;
  }
}

interface Reservation {
  id: number;
  name: string;
  phone: string;
  bookingDate: string;
  examinationDate: string;
  status: 'pending' | 'accepted' | 'rejected';
}





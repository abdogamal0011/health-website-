import { subscribe } from 'diagnostics_channel';
import { Component } from '@angular/core';
import { FreetimeService } from '../../service/freetime.service';
import { pipe } from 'rxjs';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface CalendarDay {
  date: Date;
  availableTimes: TimeSlot[];
}

@Component({
  selector: 'app-free-time',
  standalone: true,
  imports: [DatePipe , FormsModule],
  templateUrl: './free-time.component.html',
  styleUrl: './free-time.component.css',
})
export class FreetimeComponent {

  freetimes: any = { };
  selectedFreetime: string = '';
  doctorId: number = 1;
  editedFreetimeId: number | null = null;
  editedFreetime: string = '';



  constructor(private freetimeapi: FreetimeService    ) {}

  ngOnInit() {
    this.fetchFreetimes();
  }

  fetchFreetimes() {
    this.freetimeapi.getAllFreetimes(this.doctorId).subscribe(
      (data) => {
        this.freetimes = data;
        console.log("one" , this.freetimes);

      },
      (error) => {
        console.error('Error fetching freetimes:', error);
      }
    );
  }

  formatDateTime(dateTime: Date): string {
    const year = dateTime.getFullYear();
    const month = ('0' + (dateTime.getMonth() + 1)).slice(-2);
    const day = ('0' + dateTime.getDate()).slice(-2);
    const hours = ('0' + dateTime.getHours()).slice(-2);
    const minutes = ('0' + dateTime.getMinutes()).slice(-2);
    const seconds = ('0' + dateTime.getSeconds()).slice(-2);

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  saveNewFreetime() {
    if (this.selectedFreetime) {
      // Format the selectedFreetime manually
      const formattedFreetime = this.formatDateTime(new Date(this.selectedFreetime));
      const newFreetime = { doctor_id: this.doctorId, doctor_freetimes: formattedFreetime };
      this.freetimeapi.createFreetime(newFreetime).subscribe(
        () => {
          console.log('New freetime saved successfully');
          this.fetchFreetimes(); // Refresh the list of freetimes
          this.selectedFreetime = ''; // Clear the selectedFreetime
        },
        (error) => {
          console.error('Error saving new freetime:', error);
        }
      );
    }
  }



  deleteFreetime(id: number) {
    this.freetimeapi.deleteFreetime(id).subscribe(
      () => {
        console.log('Freetime deleted successfully');
        this.fetchFreetimes(); // Refresh the list of freetimes
      },
      (error) => {
        console.error('Error deleting freetime:', error);
      }
    );
  }

  // openEditModal(freetime: any) {
  //   this.selectedFreetime = freetime.doctor_freetimes;
  //   this.editedFreetimeId = freetime.id;
  //   $('#editModal').modal('show'); // Show the modal
  // }

    editFreetime(id: number, doctor_freetimes: string) {
    this.editedFreetimeId = id;
    this.editedFreetime = doctor_freetimes;
  }
}

import { Component, ViewChild,ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {

//////////chart 1
 title = 'ng-chart';
  chart: any = [];
 
  constructor() {}



  /////////chart 2
 ctx : any;
  config : any;
  chartData : number[] = [];
  chartDatalabels : any[] = [];
  
    ngOnInit(){
  //////////////////1
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [
          {
            label: 'Monthly ranking',
            data: [2, 5, 8, 12, 12, 15, 10, 13, 18],
            borderWidth: 1,
            backgroundColor: '#11235A',
           hoverBackgroundColor: '#00040f',
           
          },
        ],
      },
      options: {
                        color: 'white',
                      
        scales: {
          y: {
            beginAtZero: true,
              ticks: {
          color: 'white' 
        }
          },
             x: {
            beginAtZero: true,
              ticks: {
          color: 'white' 
        },
        
          },
        },
        
      },
    });

      ///////////////////2

      this.chartData.push(1);
      this.chartData.push(2);
      this.chartData.push(3);
  
     const admitted= this.chartDatalabels.push('admitted');
    const examined=   this.chartDatalabels.push('being examined');
     const appointments=  this.chartDatalabels.push('appointments');
  
      this.ctx = document.getElementById('myChart');
      this.config = {
        type : 'doughnut',
        options : {
                color: 'white'

        },
        data : {
          labels : this.chartDatalabels,
          datasets : [{ 
            label: 'Chart Data',
            data: this.chartData,
            borderWidth: 2,
            borderColor: 'grey',
            backgroundColor: ['#C6CF9B', 'blue','#11235A'],
            hoverBackgroundColor: '#00040f',

        }],
        }
      }
      const myChart = new Chart(this.ctx, this.config);
 
  }
 
}

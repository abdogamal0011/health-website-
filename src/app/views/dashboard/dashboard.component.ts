import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: string;
  period: string;
  payment: string;
  date: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({


  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private chartsData: DashboardChartsData) {
  }

  public users: IUser[] = [
    {
      name: 'mona yassen',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'elmaadi',
      usage: 'Tonsillitis',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      date: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'elmaadi',
      usage: 'Tonsillitis',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      date: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info'
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'elmaadi',
      usage: 'Tonsillitis',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      date: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      name: 'Enéas Kwadwo',
      state: 'elmaadi',
      registered: 'Jan 1, 2021',
      country: 'Fr',
      usage: 'Tonsillitis',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      date: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Es',
      usage: 'Tonsillitis',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      date: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary'
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pl',
      usage: 'Tonsillitis',
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      date: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark'
    }
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}

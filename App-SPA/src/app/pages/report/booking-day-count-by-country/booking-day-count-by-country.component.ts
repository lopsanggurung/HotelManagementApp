import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-booking-day-count-by-country',
  templateUrl: './booking-day-count-by-country.component.html',
  styleUrls: ['./booking-day-count-by-country.component.scss']
})
export class BookingDayCountByCountryComponent implements OnInit {
  bookingDayCountByCountry: any[];
  theme = 'macarons';
  pieChartOption: EChartOption;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.bookingDayCountByCountry = data['bookingDayCountByCountry'];
    });
  }

  ngOnInit() {
    this.pieChartOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        data: this.bookingDayCountByCountry
      },
      series: [
        {
          name: 'pie',
          type: 'pie',
          radius: '65%',
          center: ['50%', '65%'],
          data: this.bookingDayCountByCountry
        }
      ]
    };
  }

}

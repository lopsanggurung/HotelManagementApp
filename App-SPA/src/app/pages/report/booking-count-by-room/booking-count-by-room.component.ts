import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-booking-count-by-room',
  templateUrl: './booking-count-by-room.component.html',
  styleUrls: ['./booking-count-by-room.component.scss']
})
export class BookingCountByRoomComponent implements OnInit {
  bookingCountByRoom: any[];
  theme = 'macarons';
  barChartOption: EChartOption;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.bookingCountByRoom = data['bookingCountByRoom'];
    });
  }

  ngOnInit() {
    this.barChartOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      xAxis: {
        type: 'category',
        data: ['101', '102', '103', '104', '105', '201', '202', '203', '204', '205', '301', '302', '303', '304', '305']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: this.bookingCountByRoom
      }]
    };
  }
}

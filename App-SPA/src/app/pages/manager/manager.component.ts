import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  theme = 'macarons';

  barChartOption: EChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: 'bar',
      type: 'bar',
      data: [
        { value: 10, name: 'Jan' },
        { value: 5, name: 'Feb' },
        { value: 15, name: 'Mar' },
        { value: 25, name: 'Apr' },
        { value: 20, name: 'May' },
        { value: 35, name: 'Jun' },
        { value: 30, name: 'Jul' },
        { value: 40, name: 'Aug' },
        { value: 50, name: 'Sep' },
        { value: 53, name: 'Oct' },
        { value: 63, name: 'Nov' },
        { value: 20, name: 'Dec' }
      ]
    }]
  };

  pieChartOption: EChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [
      {
        name: 'pie',
        type: 'pie',
        radius: '65%',
        center: ['50%', '65%'],
        data: [
          { value: 10, name: 'Jan' },
          { value: 5, name: 'Feb' },
          { value: 15, name: 'Mar' },
          { value: 25, name: 'Apr' },
          { value: 20, name: 'May' },
          { value: 35, name: 'Jun' },
          { value: 30, name: 'Jul' },
          { value: 40, name: 'Aug' },
          { value: 50, name: 'Sep' },
          { value: 53, name: 'Oct' },
          { value: 63, name: 'Nov' },
          { value: 20, name: 'Dec' }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {}
}

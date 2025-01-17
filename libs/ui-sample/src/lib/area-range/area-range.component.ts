import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'abc-area-range',
  templateUrl: './area-range.component.html',
  styleUrls: ['./area-range.component.scss'],
})
export class AreaRangeComponent implements OnInit {
  ranges = [
    [1246406400000, 14.3, 27.7],
    [1246492800000, 14.5, 27.8],
    [1246579200000, 15.5, 29.6],
    [1246665600000, 16.7, 30.7],
    [1246752000000, 16.5, 25.0],
    [1246838400000, 17.8, 25.7],
    [1246924800000, 13.5, 24.8],
    [1247011200000, 10.5, 21.4],
    [1247097600000, 9.2, 23.8],
    [1247184000000, 11.6, 21.8],
    [1247270400000, 10.7, 23.7],
    [1247356800000, 11.0, 23.3],
    [1247443200000, 11.6, 23.7],
    [1247529600000, 11.8, 20.7],
    [1247616000000, 12.6, 22.4],
    [1247702400000, 13.6, 19.6],
    [1247788800000, 11.4, 22.6],
    [1247875200000, 13.2, 25.0],
    [1247961600000, 14.2, 21.6],
    [1248048000000, 13.1, 17.1],
    [1248134400000, 12.2, 15.5],
    [1248220800000, 12.0, 20.8],
    [1248307200000, 12.0, 17.1],
    [1248393600000, 12.7, 18.3],
    [1248480000000, 12.4, 19.4],
    [1248566400000, 12.6, 19.9],
    [1248652800000, 11.9, 20.2],
    [1248739200000, 11.0, 19.3],
    [1248825600000, 10.8, 17.8],
    [1248912000000, 11.8, 18.5],
    [1248998400000, 10.8, 16.1],
  ];
  averages = [
    [1246406400000, 21.5],
    [1246492800000, 22.1],
    [1246579200000, 23],
    [1246665600000, 23.8],
    [1246752000000, 21.4],
    [1246838400000, 21.3],
    [1246924800000, 18.3],
    [1247011200000, 15.4],
    [1247097600000, 16.4],
    [1247184000000, 17.7],
    [1247270400000, 17.5],
    [1247356800000, 17.6],
    [1247443200000, 17.7],
    [1247529600000, 16.8],
    [1247616000000, 17.7],
    [1247702400000, 16.3],
    [1247788800000, 17.8],
    [1247875200000, 18.1],
    [1247961600000, 17.2],
    [1248048000000, 14.4],
    [1248134400000, 13.7],
    [1248220800000, 15.7],
    [1248307200000, 14.6],
    [1248393600000, 15.3],
    [1248480000000, 15.3],
    [1248566400000, 15.8],
    [1248652800000, 15.2],
    [1248739200000, 14.8],
    [1248825600000, 14.4],
    [1248912000000, 15],
    [1248998400000, 13.6],
  ];
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'arearange',
    },

    rangeSelector: {
      selected: 2,
    },

    title: {
      text: 'Temperature variation by day',
    },

    tooltip: {
      valueSuffix: '°C',
    },

    yAxis: {
      title: {
        text: null,
      },
    },

    xAxis: {
      type: 'datetime',
      plotLines:[{
        color:'red',
        dashStyle:'LongDashDot',
        value: 3, // Value of where the line will appear
        width: 2 // Width of the line    
      }]
    },

    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
      },
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        type: 'line',
        name: 'Installation',
        color: '#fe33ed',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
      {
        type: 'line',
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      },
      {
        type: 'line',
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      },
      {
        type: 'line',
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
      },
      {
        type: 'line',
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChartService } from './chart.service';
import { ActivatedRoute } from '@angular/router';
import { IEOS } from './IEOS';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar.chart.component.html',
  styleUrls: ['./bar.chart.component.css']
})
export class BarChartComponent implements OnInit {
  

  public barChartOptions:any;
  // public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartLabels:string[] = [];
  
  public barChartType: string;
  public barChartLegend: boolean;
 
  // public barChartData:any[] = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];
  barChartData:any[] = [];
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    let eos: IEOS = this.route.snapshot.data['machine'];

    console.log("inside bar chart : " + JSON.stringify(eos));
    let data: number[] = [];

    eos.eosMachine1.data.forEach(element => {
      this.barChartLabels.push(element.parameter);
      data.push(Number(element.value));   
    });

    this.barChartData.push({data, label: 'EOS Machine 1'});
    data = [];

    eos.eosMachine2.data.forEach(element => {
      data.push(Number(element.value));   
    });
    this.barChartData.push({data, label: 'EOS Machine 2'});
  
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}

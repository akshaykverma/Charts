import { Component, OnInit } from '@angular/core';
import { IEOS } from '../barChart/IEOS';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  // public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  public radarChartLabels:string[] = [];

  
  // public radarChartData:any = [
  //   {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  // ];

  public radarChartData: any[] = [];
  public radarChartType: string;
 
  ngOnInit() {
    this.radarChartType = 'radar';
    let eos: IEOS = this.route.snapshot.data['machine'];

    console.log("inside bar chart : " + JSON.stringify(eos));
    let data: number[] = [];

    eos.eosMachine1.data.forEach(element => {
      this.radarChartLabels.push(element.parameter);
      data.push(Number(element.value));   
    });

    this.radarChartData.push({data, label: 'EOS Machine 1'});
    data = [];

    eos.eosMachine2.data.forEach(element => {
      data.push(Number(element.value));   
    });
    this.radarChartData.push({data, label: 'EOS Machine 2'});
  
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}

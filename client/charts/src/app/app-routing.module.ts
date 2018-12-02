import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './barChart/bar.chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { MachineResolver } from './barChart/MachineResolver';

const routes: Routes = [
  { path: 'barChart', 
    component: BarChartComponent, 
    resolve: {
      machine: MachineResolver
  }
  },
  { path: 'doughnutChart', component: DoughnutChartComponent },
  { path: 'radarChart', component: RadarChartComponent,  resolve: {
    machine: MachineResolver
} },
  { path: 'pieChart', component: PieChartComponent },
  { path: 'polarAreaChart', component: PolarAreaChartComponent },
  { path: 'lineChart', component: LineChartComponent },
  { path: '', redirectTo: 'barChart', pathMatch: 'full' },
  { path: '**', redirectTo: 'barChart', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

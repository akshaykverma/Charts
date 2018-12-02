import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './barChart/bar.chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarAreaChartComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

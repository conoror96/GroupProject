import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayWeatherReportPage } from './display-weather-report';

@NgModule({
  declarations: [
    DisplayWeatherReportPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayWeatherReportPage),
  ],
  exports: [
    DisplayWeatherReportPage
  ]
})
export class DisplayWeatherReportPageModule {}

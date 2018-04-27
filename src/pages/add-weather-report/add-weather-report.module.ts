import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddWeatherReportPage } from './add-weather-report';

@NgModule({
  declarations: [
    AddWeatherReportPage,
  ],
  imports: [
    IonicPageModule.forChild(AddWeatherReportPage),
  ],
  exports: [
    AddWeatherReportPage
  ]
})
export class AddWeatherReportPageModule {}

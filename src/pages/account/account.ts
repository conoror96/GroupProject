import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisplayWeatherReportPage } from '../display-weather-report/display-weather-report';
import { AddWeatherReportPage } from '../add-weather-report/add-weather-report';

/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  DisplayWeatherReportPage = DisplayWeatherReportPage;
   AddWeatherReportPage = AddWeatherReportPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 /* viewReport() {
		this.navCtrl.push(DisplayWeatherReportPage);
	}

  AddNewReport() {
		this.navCtrl.push(AddWeatherReportPage);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }*/

}

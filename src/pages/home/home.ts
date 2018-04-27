import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DisplayWeatherReportPage } from '../display-weather-report/display-weather-report';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  DisplayWeatherReportPage = DisplayWeatherReportPage;
  LoginPage = LoginPage;

  login() {
    this.navCtrl.push(LoginPage);
  }
  signUp() {
    this.navCtrl.push(RegisterPage);
  }

  constructor(public navCtrl: NavController) {

  }

}


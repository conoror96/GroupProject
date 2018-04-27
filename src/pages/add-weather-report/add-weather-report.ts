import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AccountPage } from '../account/account';


@IonicPage()
@Component({
  selector: 'page-add-weather-report',
  templateUrl: 'add-weather-report.html',
})
export class AddWeatherReportPage {
  data: any = {};

  constructor(public navCtrl: NavController, public http: Http) {
    this.data.Location = '';
    this.data.Date = '';
    this.data.Rainfall = '';
    this.data.AirTemp = '';
    this.data.SoilTemp = '';
    this.data.Wind = '';
    this.data.reportno;
    this.http = http;
  }

  submit() {
    var link = 'http://52.91.213.235/api6.php';
    let body = new FormData();
    body.append('Location', this.data.Location);
    body.append('Date', this.data.Date);
    body.append('Rainfall', this.data.Rainfall);
    body.append('AirTemp', this.data.AirTemp);
    body.append('SoilTemp', this.data.SoilTemp);
    body.append('Wind', this.data.Wind);

    this.http.post(link, body).subscribe(data => {
      alert("we in");
      let leaddetails = data.json();
      this.data.leaddetails = leaddetails.viewleaddetails;
      this.data.response = leaddetails.status;

      alert("info added");
      alert(leaddetails.reportno);

    },

      error => {
        alert("No Internet connection!")
      });

  }

}

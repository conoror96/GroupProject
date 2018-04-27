import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})

export class RegisterPage {
  data: any = {};

  constructor(public navCtrl: NavController, public http: Http) {
    this.data.username = '';
    this.data.username = '';
    this.data.leaddetails;
    this.http = http;
  }

  submit() {
    var link = 'http://52.91.213.235/api5.php';
    let body = new FormData();
    body.append('username', this.data.username);
    body.append('password', this.data.password);

    this.http.post(link, body).subscribe(data => {
      let leaddetails = data.json();
      this.data.leaddetails = leaddetails.viewleaddetails;
      this.data.response = leaddetails.status;

      alert("info added");
      this.navCtrl.push(LoginPage);

    },

      error => {
        alert("No Internet connection!")
      });

  }

}
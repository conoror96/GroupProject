import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RegisterPage } from '../register/register';
import { DisplayWeatherReportPage } from '../display-weather-report/display-weather-report';
import { AccountPage } from '../account/account';


//https://stackoverflow.com/questions/43609853/angular-4-and-ionic-3-no-provider-for-http

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {
	//DisplayWeatherReportPage = DisplayWeatherReportPage;

	data: any = {};

	constructor(public navCtrl: NavController, public http: Http) {
		this.data.username = '';
		this.data.password = '';
		this.data.response = '';
		this.data.id;
		this.data.leaddetails;
		this.http = http;

	}

	signUp() {
		this.navCtrl.push(RegisterPage);
	}

	//


	submit() {
		var link = 'http://52.91.213.235/api4.php';

		let body = new FormData();
		body.append('username', this.data.username);
		body.append('password', this.data.password);



		this.http.post(link, body).subscribe(data => {
			let leaddetails = data.json();
			this.data.leaddetails = leaddetails.viewleaddetails;
			this.data.response = leaddetails.status;


			var d: number = 1;
			if (leaddetails.status == d) {
				alert("Logged in!");
				//	alert(leaddetails.id); 
				this.navCtrl.push(AccountPage);


			}
			else {
				alert("Incorrect information");
			}


		},

			error => {
				alert("No Internet connection!")
			});


	}
}
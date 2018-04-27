import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddWeatherReportPage } from '../add-weather-report/add-weather-report';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-display-weather-report',
  templateUrl: 'display-weather-report.html',
})
export class DisplayWeatherReportPage {
  AddWeatherReportPage = AddWeatherReportPage;

   //====
  data:any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

		 newReport() {
    this.navCtrl.push(AddWeatherReportPage);
  }
  

  	submit() 
		{
    var link = 'http://52.91.213.235/weatherConor.php';

		let body = new FormData();
	
    body.append('reportno',this.data.reportno);
    
		this.http.post(link,body).subscribe(data => 
		{
						alert("Error Checking")

        		let leaddetails = data.json();
        		this.data.leaddetails = leaddetails.viewleaddetails;
					
						

						this.data.response = leaddetails.wp1;
						this.data.response1 = leaddetails.wp2;
						this.data.response2 = leaddetails.wp3;
						this.data.response3 = leaddetails.wp4;
						this.data.response4 = leaddetails.wp5;
						this.data.response5 = leaddetails.wp6;
		}, 	

		error => 
		{
      alert("No Internet connection!")
    });  
		
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayWeatherReportPage');
  }

}

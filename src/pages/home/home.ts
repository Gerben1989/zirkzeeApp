import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToAccountPage() {
    this.navCtrl.push('AccountPage');
  }

  navigateToScanPage() {
    this.navCtrl.push('ScanPage');
  }

  navigateToSensorListPage() {
    this.navCtrl.push('SensorListPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
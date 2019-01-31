import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewWillLoad() {

  }

  navigateToScanPage() {
    this.navCtrl.push('ScanPage');
  }

  navigateToSensorListPage() {
    this.navCtrl.push('SensorListPage');
  }

  navigateToProfileListPage() {
    this.navCtrl.push('ProfileListPage');
  }

  navigateToScanSetupPage() {
    this.navCtrl.push('ScanSetupPage');
  }

  navigateToScanGraphPage() {
    this.navCtrl.push('ScansGraphPage')
  }

}

import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastController) {
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data.email && data.uid) {
        this.toast.create({
          message: `Welkom bij Zirkzee, ${data.email}`,
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: "Geen authenticatie gevonden...",
          duration: 3000
        }).present();
      }
    })
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

}

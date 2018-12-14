import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateBack() {
    this.navCtrl.pop();
  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }

  navigateToCreateAccountPage() {
    this.navCtrl.push('CreateAccountPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.model';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile: Profile;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.profile = this.navParams.get('profile');  
    console.log(this.profile)
  }
  
  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }

}

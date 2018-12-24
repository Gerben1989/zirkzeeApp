import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../../services/profile/profile.service';
import { Profile } from '../../models/profile/profile.model';

@IonicPage()
@Component({
  selector: 'page-create-profile',
  templateUrl: 'create-profile.html',
})
export class CreateProfilePage {

  profile: Profile = {
    firstname: undefined,
    lastname: undefined
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private profileService: ProfileService) {
  }

  createProfile(profile: Profile) {
    this.profileService.createProfile(profile);
    this.navCtrl.push('ProfileListPage');
  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }

}

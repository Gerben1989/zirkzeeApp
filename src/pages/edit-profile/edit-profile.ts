import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.model';
import { ProfileService } from '../../services/profile/profile.service';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile: Profile;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private profileService: ProfileService) {
  }

  editProfile(profile: Profile) {
    this.profileService.editProfile(profile);
    this.navCtrl.push('ProfileListPage');
  }

  deleteProfile(profile: Profile){
    this.profileService.deleteProfile(profile);
    this.navCtrl.push('ProfileListPage');
  }

  ionViewWillLoad() {
    this.profile = this.navParams.get('profile');  
  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }

}

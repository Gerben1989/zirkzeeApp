import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../../services/profile/profile.service';
import { Profile } from '../../models/profile/profile.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-create-profile',
  templateUrl: 'create-profile.html',
})
export class CreateProfilePage {

  profile: Profile = {
    firstname: "",
    lastname: "",
    height: undefined,
    weight: undefined,
    gender: "",
    birthdate: undefined,
  }

  authForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private profileService: ProfileService) {

      this.authForm = formBuilder.group({
        'firstname': ['', Validators.compose([Validators.required])],
        'lastname': ['', Validators.compose([Validators.required])],
        'length': ['', Validators.compose([Validators.required])],
        'weight': ['', Validators.compose([Validators.required])],
        'birthdate': ['', Validators.compose([Validators.required])],
        'gender': ['', Validators.compose([Validators.required])],
      });
      
  }

  createProfile(profile: Profile) {
    this.profileService.createProfile(profile);
    this.navCtrl.push('ProfileListPage');
  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }

}

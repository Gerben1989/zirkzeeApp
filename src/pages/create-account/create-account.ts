import { CreateAccountService } from '../../services/create-account/create-account.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user/user.model';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  user: User = {
    firstname: '',
    lastname: '',
    height: undefined,
    weight: undefined,
    gender: '',
    birthdate: new Date(),
    position: ''
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private createUser: CreateAccountService) {
  }

  addUser(user: User) {
    this.createUser.addUser(user).then(ref => {
      console.log(ref.key);
    })
  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }

  saveAccountSettings() {
    console.log('saveAccountSettings()');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

}

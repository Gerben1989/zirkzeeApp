import { AccountService } from '../../services/account/account.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user/user.model';

@IonicPage()
@Component({
  selector: 'page-edit-account',
  templateUrl: 'edit-account.html',
})
export class EditAccountPage {

  user: User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private accountRef: AccountService) {
  }

  ionViewWillLoad() {
    this.user = this.navParams.get('user');  
  }

  editUser(user: User) {
    this.accountRef.editUser(user).then(ref => {
      this.navCtrl.setRoot('AccountPage');
    })
  }

  removeUser(user:User) {
    this.accountRef.removeUser(user).then(() => {
      this.navCtrl.setRoot('AccountPage');
    });
  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }

}

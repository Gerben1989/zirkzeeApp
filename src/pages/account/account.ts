import { User } from './../../models/user/user.model';
import { AccountService } from '../../services/account/account.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  userRef$: Observable<User[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private accountRef: AccountService) {

    this.userRef$ = this.accountRef
    .getUsers() //DB LIST
    .snapshotChanges() //Key and Value pairs
    .pipe(map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
    }));
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

  ionViewWillLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  
}

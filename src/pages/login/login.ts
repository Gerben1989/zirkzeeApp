import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user/user.model';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth) {
  }

  async login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result)
      if(result) {
        this.navCtrl.setRoot("HomePage");
      }
    }
    catch(e) {
      console.error(e);
      this.navCtrl.setRoot("LoginPage");
    }
  }

  register() {
    this.navCtrl.push("RegisterPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileService } from './../../services/profile/profile.service';
import { Profile } from '../../models/profile/profile.model';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the ScanSetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-setup',
  templateUrl: 'scan-setup.html',
})
export class ScanSetupPage {

  profileListRef$: Observable<Profile[]>;  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private profileRef: ProfileService,
    private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(auth => {
      // console.log("Scan Setup Constructor: " + auth.uid)
      this.profileListRef$ = this.profileRef
        .getProfiles(auth.uid)
        .snapshotChanges() //Key and Value pairs
        .pipe(map(changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }));
      // Logs all profiles connected to this UID
      // this.profileListRef$.subscribe(res => console.log(res))
    });

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ScanSetupPage');
  }

}

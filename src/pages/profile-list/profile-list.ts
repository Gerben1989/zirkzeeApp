import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileService } from './../../services/profile/profile.service';
import { Profile } from '../../models/profile/profile.model';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-profile-list',
  templateUrl: 'profile-list.html',
})
export class ProfileListPage {

  profileListRef$: Observable<Profile[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private profileRef: ProfileService,
    private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(auth => {
      console.log("Profile List Constructor: " + auth.uid)
      this.profileListRef$ = this.profileRef
        .getProfiles(auth.uid)
        .snapshotChanges() //Key and Value pairs
        .pipe(map(changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }));
      this.profileListRef$.subscribe(res => console.log(res))
    });

  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }

}

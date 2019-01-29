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
  firebaseUser: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private profileRef: ProfileService,
    private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(auth => {
      this.firebaseUser = auth.email
      this.profileListRef$ = this.profileRef
        .getProfiles(auth.uid)
        .snapshotChanges() //Key and Value pairs
        .pipe(map(changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
      }));

      this.profileListRef$.subscribe(res => console.log(res))

      this.profileListRef$.subscribe(res => {
          res.forEach(element => {
            console.log(element.key);
          })
      })

    });

  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }

}

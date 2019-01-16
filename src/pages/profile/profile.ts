import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../../models/sensor/sensor.model';
import { SensorListService } from '../../services/sensors/sensor-list.service';
import { Profile } from '../../models/profile/profile.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile: Profile;
  uid: any;
  sensorGroups$: Observable<any[]>; //Op ANY gezet als test

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sensorRef: SensorListService,
    private afAuth: AngularFireAuth) {
  }

  ionViewWillLoad() {
    this.profile = this.navParams.get('profile');
    this.afAuth.authState.subscribe(auth => {
      // console.log("Scan Will Load");
      // console.log("UID: " + auth.uid)
      // console.log("Profile ID:  " + this.profile.key)
      // console.log(this.profile)
      this.uid = auth.uid;
      this.sensorGroups$ = this.sensorRef
        .getSensorGroups(auth.uid, this.profile.key) //Get SensorGroups for this UID and Profile ID
        .snapshotChanges() //Key and Value pairs
        .pipe(map(changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }));
      // this.sensorGroups$.subscribe(res => console.log(res.length))
      this.sensorGroups$.subscribe(res => {
        console.log(res)
        for(var i = 0; i < res.length; i++) {
          console.log(res[i].key)
        }
      })
    });
  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }

}

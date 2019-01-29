import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../../models/sensor/sensor.model';
import { SensorListService } from '../../services/sensors/sensor-list.service';
import { ApiService } from '../../services/api/api.service';
import { Profile } from '../../models/profile/profile.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  scansArray: any[];
  profile: Profile;
  uid: any;
  sensorList$: Observable<any[]>; //Op ANY gezet als test
  sensorListTest$: Observable<Sensor[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sensorRef: SensorListService,
    private apiRef: ApiService,
    private afAuth: AngularFireAuth) {

    //TESTDATA
    this.sensorListTest$ = this.sensorRef
      .getSensorListTest() //DB LIST
      .snapshotChanges() //Key and Value pairs
      .pipe(map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }));
    this.sensorListTest$.subscribe(res => console.log(res))
  }

  ionViewWillLoad() {
    this.profile = this.navParams.get('profile');
    this.afAuth.authState.subscribe(auth => {
      this.uid = auth.uid;
      this.sensorList$ = this.sensorRef
        .getSensorListLive(auth.uid, this.profile.key) //Get SensorList for this UID and Profile ID
        .snapshotChanges() //Key and Value pairs
        .pipe(map(changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }));
      this.sensorList$.subscribe(res => console.log(res)) //userID/profileID/sensor-groups/sensor-live
    });
  }

  synchronizeStart(profileKey){
    this.afAuth.authState.subscribe(auth => {
      this.apiRef.synchronizeServiceStart(auth.uid, profileKey);
    });
  }

  sleepCycleStart(profileKey){
    this.afAuth.authState.subscribe(auth => {
      this.apiRef.sleepCycleServiceStart(auth.uid, profileKey);
    });
  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }

}

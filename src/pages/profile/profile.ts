import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SensorListService } from '../../services/sensors/sensor-list.service';
import { Profile } from '../../models/profile/profile.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile: Profile;
  uid: any;
  sensorGroups$: Observable<any[]>; //Op ANY gezet als test
  sensorArray: any = []
  selectedArray :any = [];

  sensorArray2: any = []
  sensorGroupAmount: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sensorRef: SensorListService,
    private afAuth: AngularFireAuth,
    public modalCtrl: ModalController) {
  }

  ionViewWillLoad() {
    this.profile = this.navParams.get('profile');
    this.afAuth.authState.subscribe(auth => {
      this.uid = auth.uid;
      this.sensorGroups$ = this.sensorRef
        .getSensorGroups(auth.uid, this.profile.key) //Get SensorGroups for this UID and Profile ID
        .snapshotChanges() //Key and Value pairs
        .pipe(map(changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
      }));
      // this.sensorGroups$.subscribe(res => console.log(res))
      this.sensorGroups$.subscribe(res => {
        this.sensorArray = Object.keys(res).map(e => res[e]);
        this.sensorGroupAmount = this.sensorArray.length;
      })
    });
  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => {return obj[key]})
  }

  onClickSensor(index) {
    var obj = this.sensorArray[index]
    var data = {data: obj}
    var modalPage = this.modalCtrl.create('ModalPage', data);
    modalPage.present();
  }

  selectMember(data){
    var match = this.checkArray(data);
    if(!match){
      this.selectedArray.push(data);
    }
  }

  checkArray(data){
    var i:number; 
    for(i=0; i<this.selectedArray.length; i++){
      if(data.key === this.selectedArray[i].key){
        delete this.selectedArray[i]
        this.sortArray()
        return true
      }
    }
    return false
  }

  sortArray(){
    var result = [];
    var offset = 0;
    var i:number; 
    for(i=0; i<this.selectedArray.length; i++){
      var value = this.selectedArray[i];
      if (value) {
        result[i-offset] = value;
      }else{
        offset++
      }
    }
    this.selectedArray = result;
  }

   genereerGrafiek() {
    var data = {
      data: this.selectedArray,
      avg: false
    };
    var modalPage = this.modalCtrl.create('ScanGraphModalPage', data);
    modalPage.present();
   }

   genereerAvgGrafiek() {
    var data = {
      data: this.selectedArray,
      avg: true
    };
    var modalPage = this.modalCtrl.create('ScanGraphModalPage', data);
    modalPage.present();
   }


   navigateToScanSetupPage(){
    this.navCtrl.setRoot('ScanSetupPage');
   }

}

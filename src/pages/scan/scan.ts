import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../../models/sensor/sensor.model';
import { SensorListService } from '../../services/sensors/sensor-list.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})

export class ScanPage {
  
  sensorList$: Observable<Sensor[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sensorRef: SensorListService) {

    this.sensorList$ = this.sensorRef
    .getSensorList() //DB LIST
    .snapshotChanges() //Key and Value pairs
    .pipe(map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
    }));
  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }
  
  ionViewWillLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

}

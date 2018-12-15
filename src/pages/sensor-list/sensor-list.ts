import { SensorListService } from '../../services/sensors/sensor-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sensor } from '../../models/sensor/sensor.model';


@IonicPage()
@Component({
  selector: 'page-sensor-list',
  templateUrl: 'sensor-list.html',
})
export class SensorListPage {

  sensorList$: Observable<Sensor[]>;
  
  constructor(
    public navCtrl: NavController, 
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
  
}

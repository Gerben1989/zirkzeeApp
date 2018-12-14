import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../../models/sensor/sensor.model';
import { SensorListService } from '../../services/sensors/sensor-list.service';

@IonicPage()
@Component({
  selector: 'page-edit-sensor',
  templateUrl: 'edit-sensor.html',
})
export class EditSensorPage {
  sensor: Sensor;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sensorList: SensorListService) {
  }

  ionViewWillLoad() {
    this.sensor = this.navParams.get('sensor');  
  }

  editSensor(sensor: Sensor) {
    this.sensorList.editSensor(sensor).then(() => {
      this.navCtrl.setRoot('SensorListPage');
    });
  }

  removeSensor(sensor:Sensor) {
    this.sensorList.removeSensor(sensor).then(() => {
      this.navCtrl.setRoot('SensorListPage');
    });
  }

}

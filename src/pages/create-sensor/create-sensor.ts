import { SensorListService } from './../../services/sensors/sensor-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sensor } from '../../models/sensor/sensor.model';

@IonicPage()
@Component({
  selector: 'page-create-sensor',
  templateUrl: 'create-sensor.html',
})
export class CreateSensorPage {

  sensor: Sensor = {
    number: undefined,
    value: undefined,
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private sensorList: SensorListService) {
  }

  addSensor(sensor: Sensor) {
    this.sensorList.addSensor(sensor).then(ref => {
      console.log(ref.key);
      this.navCtrl.setRoot('SensorListPage');
    })
  }

  navigateToRootHomePage(): void {
    this.navCtrl.setRoot('HomePage');
  }
  
}

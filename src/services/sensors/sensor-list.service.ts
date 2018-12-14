import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Sensor } from '../../models/sensor/sensor.model';

@Injectable()
export class SensorListService {

    private sensorList = this.db.list<Sensor>('sensor-list');

    constructor(private db: AngularFireDatabase) {

    }

    getSensorList() {
        return this.sensorList;
    }

    addSensor(sensor:Sensor) {
        return this.sensorList.push(sensor);
    }

    editSensor(sensor:Sensor) {
        return this.sensorList.update(sensor.key, sensor);
    }

    removeSensor(sensor:Sensor) {
        return this.sensorList.remove(sensor.key);
    }
}
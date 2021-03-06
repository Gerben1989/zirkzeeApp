import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Sensor } from '../../models/sensor/sensor.model';

@Injectable()
export class SensorListService {

    private sensorListTest$ = this.afDatabase.list<Sensor>('sensor-list');
    // private sensorListLive$ = this.afDatabase.list<Sensor>('sensor-group/sensor-list');


    constructor(
        private afDatabase: AngularFireDatabase) {

    }

    getSensorListTest() {
        return this.sensorListTest$;
    }

    getSensorListLive(uid: any, profileID: any) {
        return this.afDatabase.list<Sensor>(`profile/${uid}/${profileID}/sensor-groups/sensor-live`);
    }

    getSensorGroups(uid: any, profileID: any) {
        return this.afDatabase.list<Sensor>(`profile/${uid}/${profileID}/sensor-groups`);
    }

    addSensor(sensor:Sensor) {
        return this.sensorListTest$.push(sensor);
    }

    editSensor(sensor:Sensor) {
        return this.sensorListTest$.update(sensor.key, sensor);
    }

    removeSensor(sensor:Sensor) {
        return this.sensorListTest$.remove(sensor.key);
    }
}

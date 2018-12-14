import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorListPage } from './sensor-list';

@NgModule({
  declarations: [
    SensorListPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorListPage),
  ],
})
export class SensorListPageModule {}

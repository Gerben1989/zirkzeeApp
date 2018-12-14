import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateSensorPage } from './create-sensor';

@NgModule({
  declarations: [
    CreateSensorPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateSensorPage),
  ],
})
export class CreateSensorPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSensorPage } from './edit-sensor';

@NgModule({
  declarations: [
    EditSensorPage,
  ],
  imports: [
    IonicPageModule.forChild(EditSensorPage),
  ],
})
export class EditSensorPageModule {}

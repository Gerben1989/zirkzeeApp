import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanGraphModalPage } from './scan-graph-modal';

@NgModule({
  declarations: [
    ScanGraphModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanGraphModalPage),
  ],
})
export class ScanGraphModalPageModule {}

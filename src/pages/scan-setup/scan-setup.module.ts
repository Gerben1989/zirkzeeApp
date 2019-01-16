import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanSetupPage } from './scan-setup';

@NgModule({
  declarations: [
    ScanSetupPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanSetupPage),
  ],
})
export class ScanSetupPageModule {}

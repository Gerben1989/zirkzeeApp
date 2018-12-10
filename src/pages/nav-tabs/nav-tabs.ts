import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the NavTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nav-tabs',
  templateUrl: 'nav-tabs.html'
})
export class NavTabsPage {

  scanRoot = 'ScanPage'
  resultRoot = 'ResultPage'
  homeRoot = 'HomePage'
  accountRoot = 'AccountPage'
  extraRoot = 'ExtraPage'


  constructor(public navCtrl: NavController) {}

}

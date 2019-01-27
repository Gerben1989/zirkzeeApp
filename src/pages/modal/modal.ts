import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  sensorArray = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.sensorArray.push(this.navParams.get('data'));
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => {return obj[key]})
  }

}

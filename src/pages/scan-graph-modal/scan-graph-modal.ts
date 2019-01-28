import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-scan-graph-modal',
  templateUrl: 'scan-graph-modal.html',
})
export class ScanGraphModalPage {


  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any
  test= [];

  colors = ['#488aff','#32db64','#f53d3d',' #FF5733', '#48C9B0']

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let obj = this.navParams.get('data')
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            datasets: []
        }
    });
    let arr = [];

    for (var i in obj) {
      let temp = []
      for (var j in obj[i]){
        temp.push(obj[i][j].pressure)
      }
      arr.push(temp);
    }

    for (var k = 0; k < arr.length; k++) {

      this.lineChart.data.datasets.push({
        label: k,
        fill: false,
        backgroundColor: this.colors[k],
        lineTension: 0.1,
        data: arr[k],
        borderColor: this.colors[k],
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: this.colors[k],
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: this.colors[k],
        pointHoverBorderColor: this.colors[k],
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        spanGaps: false,
      });

      this.lineChart.update();
    }
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

}

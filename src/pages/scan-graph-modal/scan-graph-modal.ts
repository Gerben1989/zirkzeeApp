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
    let obj = this.navParams.get('data');
    let avg = this.navParams.get('avg');

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
          labels: [1,2,3,4,5,6],
          datasets: []
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    reverse: true,
                    suggestedMax: "1000",
                    stepSize: 100,
                    stepValue: 10,
                }
            }]
        }
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
    
    let totalArr
    let rowAvgArr
    let goodArr
    let rowAvgArrs
    if(avg == true){
      totalArr = this.totalArr(arr)
      rowAvgArr = this.rowAvgArr(arr, totalArr)
      this.lineChart.data.datasets.push({
        label: "Gemiddelde",
        fill: false,
        backgroundColor: this.colors[0],
        lineTension: 0.1,
        data: rowAvgArr,
        borderColor: this.colors[0],
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: this.colors[0],
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: this.colors[0],
        pointHoverBorderColor: this.colors[0],
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        spanGaps: false,
      });
      this.lineChart.update();
    }
    else if(avg == false){
      goodArr = this.removeKeys(arr)
      rowAvgArrs = this.rowAvgArrs(goodArr)
      for (var l = 0; l < rowAvgArrs.length; l++) {
        this.lineChart.data.datasets.push({
          label: "Scan " + (l+1),
          fill: false,
          backgroundColor: this.colors[l],
          lineTension: 0.1,
          data: rowAvgArrs[l],
          borderColor: this.colors[l],
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: this.colors[l],
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: this.colors[l],
          pointHoverBorderColor: this.colors[l],
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false,
        });
        this.lineChart.update();
      }
    }
  }

  rowAvgArrs(arr){
    let rowAvgArrs = []
    var x:number; 
    for(x=0; x<arr.length; x++){
      let temp = []
      var y:number;
      for(y=0; y<6; y++){
        var z:number;
        for(z=0; z<4; z++){
          if( z == 0){
            temp[y] = arr[x][z+(4*y)]
          }else{
            temp[y] += arr[x][z+(4*y)]
          }
        }
        temp[y] = temp[y]/4
      }
      rowAvgArrs.push(temp)
    }
    return rowAvgArrs
  }

  rowAvgArr(arr, totalArr){
    let rowAvgArr = []
    var v:number; 
    for(v=0; v<6; v++){
      var w:number;
      for(w=0; w<4; w++){
        if(w == 0){
          rowAvgArr[v] = totalArr[w+(4*v)]
        }else{
          rowAvgArr[v] += totalArr[w+(4*v)]
        }
      }
      rowAvgArr[v] = (rowAvgArr[v]/arr.length)/4
    }
    return rowAvgArr
  }

  totalArr(arr){
    let totalArr = []
    var t:number; 
    for(t=0; t<arr.length; t++){
      var u:number;
      for(u=0; u<arr[t].length; u++){
        if(u !== 0){
          if(t == 0){
            totalArr[u-1] = arr[t][u]
          }else{
            totalArr[u-1] += arr[t][u]
          }
        }
      }
    }
    return totalArr
  }

  removeKeys(arr){
    let goodArr = []
    var x:number; 
    for(x=0; x<arr.length; x++){
      let temp = []
      var y:number;
      for(y=1; y<arr[x].length; y++){
        temp.push(arr[x][y])
      }
      goodArr.push(temp)
    }
    return goodArr
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

}

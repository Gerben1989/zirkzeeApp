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
    console.log(obj)
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: [1,2,3,4,5,6],
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
    console.log(arr)

    let goodArr = this.removeKeys(arr)
    console.log(goodArr)

    let totalArr = this.totalArr(arr)
    console.log(totalArr)

    let rowAvgArr = this.rowAvgArr(arr, totalArr)
    console.log(rowAvgArr)

    let rowAvgArrs = this.rowAvgArrs(goodArr)
    console.log(rowAvgArrs)

    for (var k = 0; k < rowAvgArrs.length; k++) {
      this.lineChart.data.datasets.push({
        label: k,
        fill: false,
        backgroundColor: this.colors[k],
        lineTension: 0.1,
        data: rowAvgArrs[k],
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


  rowAvgArrs(arr){
    // console.log(arr)
    let rowAvgArrs = []
    var x:number; 
    for(x=0; x<arr.length; x++){
      let temp = []
      // temp.push(arr[x])
      // temp = arr[x]
      // console.log(temp)

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
      // console.log(temp)
      rowAvgArrs.push(temp)
    }
    // console.log(rowAvgArrs)
    return rowAvgArrs
  }

  //Maakt gemiddelde van alle geselecteerde scans
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
      // console.log(arr[t])
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

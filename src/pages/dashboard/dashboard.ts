import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Chart} from 'chart.js';
import {ViewChild} from '@angular/core';
import {UserBasicInfo}from '../../services/userBasicInfo.interface';
import {DataManager} from '../../services/dataManager';
import {AuthService} from '../../services/auth';
import {LoadingController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  @ViewChild("Canvas1") Canvas1;
  @ViewChild("Canvas0") Canvas0;
  information:any;
  data:any=[];
  data1:any;
  data0:any;
  userBasicInfo:UserBasicInfo={
        fname:"",
        lname:"",
        gender:"",
        Birthday:new Date(),
        profession:"",
        heightfeet:"0",
        heightinch:"0",
        weight:"0",
        traininghistory:"false",
        professional:"false",
        isCoach:"false"
      };
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private datam:DataManager,private auth:AuthService,
  private loadc : LoadingController,private alertc:AlertController) {
  }
  getCurrentDay() {
    var d = new Date();
    return d.getDay();
}
  ionViewDidEnter() {
       const l= this.loadc.create({
          content:"Loading"
        });
       l.present();
    this.auth.getAuthenticatedUser().getIdToken().then((Token)=>{
        this.datam.DLUserBasicInfo(Token).subscribe((data)=>{
             l.dismiss();
             this.userBasicInfo=this.datam.getUserBasicInof();
             firebase.database().ref("/plan/" + this.userBasicInfo.lname).once("value").then((snapshot) => {
               console.log(snapshot.val());
                 let a = snapshot.val();
                 let len = a.length;
                 for (var i = 0; i < len; i++) {
                   let b = a[i].children;
                   let len0 = b.length;
                   for (var j = 0; j < len0; j++) {
                     if (b[j].children === "em") {
                       b[j].children = [];
                     }
                   }
                 }
                 console.log(a)
                 this.information = a;
                 console.log(this.information)
                 let dataavg=[];
                 let lenn = this.information.length
                 for(var i = 0; i<lenn; i++){
                     let count = 0;
                     dataavg[i]=0;
                     let type = a[i].children;
                     let lennn = type.length;
                     for(var j = 0; j<lennn;j++){
                       let work:any;
                       if(type[j].children){
                       work = type[j].children
                       }else{
                         work = []
                       }
                       let lennnn = work.length
                       for(var k = 0; k<lennnn;k++){
                         count++;
                         console.log(work[k].name)
                         dataavg[i]=dataavg[i]+work[k].accp;
                         //console.log(work[k].accp)
                       }
                     }
                     dataavg[i]=dataavg[i]/count;
                 }
                 console.log(dataavg)
                 let data1 = {
                  labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  datasets:[{label:"Weekly @galance",fill:false,lineTension:0.3,backgroundColor:"#C0C0C0",
                borderCapStyle:'butt',borderDash:[],borderDashOffset:0.0,borderJoinStyle:'miter',
                pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",
                     pointBorderWidth: 1,
                     pointHoverRadius: 5,
                     pointHoverBackgroundColor: "rgba(75,192,192,1)",
                     pointHoverBorderColor: "rgba(220,220,220,1)",
                     pointHoverBorderWidth: 2,
                     pointRadius: 1,
                     pointHitRadius: 10,
                     data:dataavg,
                     spanGaps: false,}]
                };
                let accp = dataavg[this.getCurrentDay()-1];
                console.log(accp)
                let data0={
                  labels: ["Accomplished","Remaining"],
                 datasets: [
                   {
                     data: [accp,100-accp],
                     backgroundColor: ["#00D8FF", "#FF7C00"],
                     hoverBackgroundColor: ["#FF7C00", "#00D8FF"]
                   }]
                };
                  this.Canvas1=new Chart(this.Canvas1.nativeElement,{data:data1,type:'line'});
                  this.Canvas0=new Chart(this.Canvas0.nativeElement,{data:data0,type:'pie'});
               });
        },(err)=>{
          l.dismiss();
          const a = this.alertc.create({
            title:"Server ERROR0",
            message:err.message,
            buttons:["Ok"]
          });
          a.present();
        });
    },(err)=>{
      l.dismiss();
      const a = this.alertc.create({
        title:"Server ERROR1",
        message:err.message,
        buttons:["Ok"]
      });
      a.present();
    });
  }

}

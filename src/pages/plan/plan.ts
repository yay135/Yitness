import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailPage } from '../detail/detail';
import firebase from 'firebase';
import { AuthService } from '../../services/auth';
import { work } from '../../services/work.interface';
import {PopPage} from '../pop';
import {PopoverController} from 'ionic-angular';

@Component({
  selector: 'page-plan',
  templateUrl: 'plan.html'
})
export class PlanPage {
  information: any[];
  UserId: String;
  name: string;
  gname: string;
  editable: boolean;

  constructor(public navCtrl: NavController, private http: Http, private auth: AuthService,
    private navm: NavParams,private popc:PopoverController) {
    this.gname = this.navm.data;
    if (typeof (this.gname) === "string") {
      this.editable = true;
      firebase.database().ref("/plan/" + this.gname).once("value").then((snapshot) => {
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
        this.information = a;
      });
    } else {
      this.editable = false;
      if (this.auth.getAuthenticatedUser()) {
        this.UserId = this.auth.getAuthenticatedUser().uid;
      }
      firebase.database().ref('/' + this.UserId).once('value').then((snapshot) => {
        this.name = snapshot.val().userbasic.lname
        firebase.database().ref("/plan/" + this.name).once("value").then((snapshot) => {
          let a = snapshot.val();
          let len = a.length;
          for (var i = 0; i < len; i++) {
            let b = a[i].children;
            let len0 = b.length;
            for (var j = 0; j < len0; j++) {
              if (b[j].children === "em") {
                b[j].children = [];
              } else {
              }
            }
          }
          this.information = a;
        });
      });
    }
  }

  ionViewDidLoad(){
    this.gname = this.navm.data;
    if (typeof (this.gname) === "string") {
      firebase.database().ref("/plan/" + this.gname).on("value",(snapshot) => {
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
        this.information = a;
      });
    } else {
      if (this.auth.getAuthenticatedUser()) {
        this.UserId = this.auth.getAuthenticatedUser().uid;
      }
      firebase.database().ref('/' + this.UserId).once('value').then((snapshot) => {
        this.name = snapshot.val().userbasic.lname
        firebase.database().ref("/plan/" + this.name).on("value",(snapshot) => {
          let a = snapshot.val();
          console.log(a);
          let len = a.length;
          for (var i = 0; i < len; i++) {
            let b = a[i].children;
            let len0 = b.length;
            for (var j = 0; j < len0; j++) {
              if (b[j].children === "em") {
                b[j].children = [];
              } else {
              }
            }
          }
          this.information = a;
        });
      });
    }
  }
  add(item, child) {
    let exer:work;
    const pop = this.popc.create(PopPage);
    pop.present({ ev: event });
    pop.onDidDismiss(data=>{
     exer=data;
     let a = this.information;
    let len = a.length;
    for(var i = 0;i<len;i++){
      if(a[i].name == item.name){
        let b = a[i].children;
        let len0 = b.length;
        console.log(len0)
        for(var j = 0;j<len0;j++){
          if(b[j].name == child.name){
            if (b[j].children){
            b[j].children.push(exer);}
            else{b[j]={
              name:child.name,
              children:[exer],
            }}
          }
        }
    }
    }
    firebase.database().ref("/plan/" + this.gname).set(this.information);
    });
  }
  delete(item0, child, item) {
    let a = this.information;
    let len = a.length;
    for(var i = 0;i<len;i++){
      if(a[i].name == item.name){
        let b = a[i].children;
        let len0 = b.length;
        for(var j = 0;j<len0;j++){
          if(b[j].name == child.name){
           let f = b[j].children;
           let g = f.length;
           for(var i = 0; i<g;i++){
             if (f[i].name===item0.name){
               f.splice(i,1);
               firebase.database().ref("/plan/" + this.gname).set(this.information);
               return
             }
           }
          }
        }
      }
    }
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }

  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  gotoDetail(a:any,b:any,c:any) {
    this.navCtrl.push(DetailPage, {day:c,basic:b,work:a,name:this.name,gname:this.gname});
  }
}

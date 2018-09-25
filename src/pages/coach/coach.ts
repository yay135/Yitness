import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CoachDtPage} from "../coach-dt/coach-dt";
import firebase from 'firebase'
import {AuthService} from '../../services/auth';
import {AlertController} from 'ionic-angular'
/**
 * Generated class for the CoachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coach',
  templateUrl: 'coach.html',
})
export class CoachPage {
    coaches=[];
    name = ""
  constructor(private alertc:AlertController,public navCtrl: NavController, public navParams: NavParams,private auth:AuthService) {
    firebase.database().ref('/coaches').once('value').then((snapshot)=>{
      const a = snapshot.val();
      Object.keys(a).map(key=>{this.coaches.push(key)});
      //console.log(this.coaches);
    })
    const userId = this.auth.getAuthenticatedUser().uid;
    firebase.database().ref('/' + userId).once('value').then((snapshot)=>{
       this.name = snapshot.val().userbasic.lname

    })
  }

  coachdetail(slidingitem,item){
    console.log(slidingitem)
    console.log(item)
    slidingitem.close();
    firebase.database().ref("/coaches/"+item).once('value').then((snapshot)=>{
      console.log("snapshotget")
      const c = snapshot.val();
      const allStuts = [];
      Object.keys(c).map(key=>{
         allStuts.push(c[key]);
      });
      var len = allStuts.length;
      for(var i = 0; i<len; i++){
        console.log("in loop");
        if(allStuts[i]===this.name){
          const alert = this.alertc.create({
            title:"Warning!",
            message:"You can only subscribe to a coach once",
            buttons:["Ok"]
          });
          alert.present();
          return;
        }
      }
      const a =snapshot.val();
      if(a.first==="stu1"){
        console.log("updated1");
        firebase.database().ref("/coaches/"+item).update({first:this.name});
        const al=this.alertc.create({
          title:"Success!",
          message:"you have selected a coach!",
          buttons:["Ok"]
        });
        al.present();
        return;
      }
      if(a.second==="stu2"){
        console.log("updated2");
        firebase.database().ref("/coaches/"+item).update({second:this.name});
        const al=this.alertc.create({
          title:"Success!",
          message:"you have selected a coach!",
          buttons:["Ok"]
        });
        al.present();
        return;
      }
      if(a.third==="stu3"){
        console.log("updated3");
        firebase.database().ref("/coaches/"+item).update({third:this.name});
        const al=this.alertc.create({
          title:"Success!",
          message:"you have selected a coach!",
          buttons:["Ok"]
        });
        al.present();
        return;
      }
      const alert0 = this.alertc.create({
        title:"Sorry",
        message:"The capacity of this coach is full!",
        buttons:["Ok"]
      });
      alert0.present();
      return;
    },(err)=>{
    });
    // firebase.database().ref("/coaches/"+item).
  }
}

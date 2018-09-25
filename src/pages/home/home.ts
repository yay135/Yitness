import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserInfoPage } from '../user-info/user-info'
import {DashboardPage} from '../dashboard/dashboard'
import {PlanPage} from "../plan/plan";
import { AuthService } from '../../services/auth';
import {CoachPage} from "../coach/coach";
import {StudentPage} from "../student/student";
import firebase from 'firebase'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isCoach:boolean=false;
  isStudent:boolean=false;
  UserId:any;

  constructor(public navCtrl: NavController,private auth: AuthService) {
    if(this.auth.getAuthenticatedUser()){
    this.UserId=this.auth.getAuthenticatedUser().uid;
    };
    // firebase.database().ref('/exercise').child('bob').set({
    //   hg:"name",
    //   tg:"namm"
    // });
    // firebase.database().ref('/coaches').once('value').then((snapshot)=>{
    //   const a = snapshot.val();
    //   Object.keys(a).map(key=>{this.coaches.push(key)});
    //   console.log(this.coaches);
    // });
    // firebase.database().ref('/exercise').once('value').then((snapshot)=>{
    //   const a = snapshot.val();
    //   Object.keys(a).map(key=>{this.exercise.push(a[key])});
      //console.log(this.exercise);
    //});
    firebase.database().ref('/' + this.UserId).once('value').then((snapshot)=>{
      if(snapshot.val()){
      if(snapshot.val().userbasic.isCoach=="true"){
          //console.log("one");
            this.isCoach=true;
            this.isStudent=false;
        }else{
          //console.log("two");
            this.isStudent=true;
            this.isCoach=false;
        }
      }else{
        this.isCoach=false;
        this.isStudent=false;
      }
      //console.log("isCoach"+":"+this.isCoach);

    });
  }
  ionViewDidEnter(){
    const userRef = firebase.database().ref('/' + this.UserId);
    userRef.on('value',(snapshot)=>{
      if(snapshot.val()){
        //console.log(snapshot.val().userbasic.isCoach);
        if(snapshot.val().userbasic.isCoach=="true"){
            console.log(snapshot.val().userbasic.isCoach);
            console.log("three")
              this.isCoach=true;
              this.isStudent=false;
          }else{
            //console.log(snapshot.val().userbasic.isCoach);
            //console.log("four")
              this.isStudent=true;
              this.isCoach=false;
          }
        }else{
          this.isCoach=false;
          this.isStudent=false;
        }
        //console.log(this.UserId+":"+this.isCoach);
    });
  }
  addInfo(){
    this.navCtrl.push(UserInfoPage);
  }
  gotoGraph(){
    this.navCtrl.push(DashboardPage);
  }
  trainPlan(){
    this.navCtrl.push(PlanPage);
  }
  Coach(){
    this.navCtrl.push(CoachPage);
  }
  Student(){
    this.navCtrl.push(StudentPage);
  }
}

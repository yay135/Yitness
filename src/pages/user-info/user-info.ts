import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataManager} from '../../services/dataManager';
import { AuthService } from '../../services/auth';
import { AlertController} from 'ionic-angular';
import { LoadingController} from 'ionic-angular';
import { messaging } from 'firebase';
import firebase from 'firebase';
import {plan} from '../../services/plan.interface';
/**
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private datam:DataManager,private auth:AuthService,private alertc: AlertController,
  private loadc: LoadingController) {
  }
  initPlan=[
    {
        name: "Monday",
        children: [
            {
                name: "Basics",
                children:"em"
            },
            {
                name: "Bodyshaping",
                children:"em"
            }
        ]
    },
    {
        name: "Tuesday",
        children: [
            {
                name: "Basics",
                children:"em"
            },
            {
                name: "Bodyshaping",
                children:"em"
            }
        ]
    },
    {
        name: "Wednesday",
        children: [
            {
                name: "Basics",
                children:"em"
            },
            {
                name: "Bodyshaping",
                children:"em"
            }
        ]
    },
    {
        name: "Thursday",
        children: [
            {
                name: "Basics",
                children:"em"
            },
            {
                name: "Bodyshaping",
                children:"em"
            }
        ]
    },
    {
        name: "Friday",
        children: [
            {
                name: "Basics",
                children:"em"
            },
            {
                name: "Bodyshaping",
                children:"em"
            }
        ]
    },
    {
        name: "Saturday",
        children: [
            {
                name: "Basics",
                children:"em"
            },
            {
                name: "Bodyshaping",
                children:"em"
            }
        ]
    },
    {
        name: "Sunday",
        children: [
            {
                name: "Basics",
                children:"em"
            },
            {
                name: "Bodyshaping",
                children:"em"
            }
        ]
    }
]
  fname:string;
  lname:string;
  gender:String;
  Birthday:Date;
  profession:string;
  heightfeet:string;
  heightinch:string;
  weight:string;
  traininghistory:string;
  professional:string;
  isCoach:string;
  
  ionViewDidEnter() {
    const l = this.loadc.create({
        content:"loading..."
    })
    l.present();
    this.auth.getAuthenticatedUser().getIdToken().then((token)=>{
      if(token){
        this.datam.DLUserBasicInfo(token).subscribe(()=>{
        l.dismiss();
        if(this.datam.getUserBasicInof()){
          this.fname=this.datam.getUserBasicInof().fname;
          this.lname=this.datam.getUserBasicInof().lname;
          this.gender=this.datam.getUserBasicInof().gender;
          this.Birthday=this.datam.getUserBasicInof().Birthday;
          this.profession=this.datam.getUserBasicInof().profession;
          this.heightfeet=this.datam.getUserBasicInof().heightfeet;
          this.heightinch=this.datam.getUserBasicInof().heightinch;
          this.weight=this.datam.getUserBasicInof().weight;
          this.traininghistory=this.datam.getUserBasicInof().traininghistory;
          this.professional=this.datam.getUserBasicInof().professional;
          this.isCoach=this.datam.getUserBasicInof().isCoach;
        }
      },(err)=>{
          const alert = this.alertc.create({
            title:"Failed to retrieve your information",
            message:err.message,
            buttons:["Ok"],
          });
          alert.present();
        });
        console.log(this.datam.getUserBasicInof());
      }
          },(err)=>{
            const alert = this.alertc.create({
              title:"Failed to retrieve your information",
              message:err.message,
              buttons:["Ok"]
            })
            alert.present();
          })
    console.log('ionViewDidLoad UserInfoPage');
  }
  upGradeToPremium(){

  }
  submitBasicInfo(){
    if(this.fname == null ||this.lname == null||
     this.gender == null || this.Birthday == null ||
     this.profession == null || this.heightfeet == null ||
     this.heightinch == null || this.weight == null ||
     this.traininghistory == null || this.professional == null||
     this.isCoach == null){
       const al = this.alertc.create({
         title:"Warnning!",
         message:"please fill out the form",
         buttons:["Ok"]
       })
       al.present();
       return;
     }
    this.datam.putUserBasicInfo({
         fname:this.fname,
         lname:this.lname,
         gender:this.gender,
         Birthday:this.Birthday,
         profession:this.profession,
         heightfeet:this.heightfeet,
         heightinch:this.heightinch,
         weight:this.weight,
         traininghistory:this.traininghistory,
         professional:this.professional,
         isCoach:this.isCoach,
    });
    const l = this.loadc.create({
      content:"Submitting!"
    })
    l.present();
    this.auth.getAuthenticatedUser().getIdToken().then((token)=>{
            l.dismiss();
            console.log(this.isCoach);
            if(this.isCoach === "true"){
              console.log("added coach")
              firebase.database().ref().child("coaches/"+this.lname).set({
                first:"stu1",
                second:"stu2",
                third:"stu3"
              })
            }else{
              console.log("added a student");
              console.log(this.initPlan);
              firebase.database().ref().child("plan/"+this.lname).set(this.initPlan);
            }
            this.datam.UPUserBasicInfo(token).subscribe(()=>{
              const alert =this.alertc.create({
                title:"Submit Successful!",
                buttons:["Ok"]
              });
              alert.present();
            },(err)=>{
              console.log(err);
              const alert = this.alertc.create({
                title:"Submission Failure!",
                message:err.message,
                buttons:["Ok"]
              });
              alert.present();
            })
        
    },(err)=>{
      l.dismiss();
     const alert =  this.alertc.create({
       title:"Server ERROR",
       message:err.message,
       buttons:["Ok"]
     });
      alert.present();
    })
  }

}

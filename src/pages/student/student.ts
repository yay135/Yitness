import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import firebase from 'firebase';
import {AuthService} from '../../services/auth';
import {PlanPage} from '../plan/plan'

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  students = [];
  name = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,private auth:AuthService) {
  const userId = this.auth.getAuthenticatedUser().uid;
  firebase.database().ref('/' + userId+"/").once('value').then((snapshot)=>{
    console.log(snapshot.val());
    let a = snapshot.val();
    Object.keys(a).map(key=>{
      let b = a[key];
      this.name=b.lname;
    });
    });
  }
    ionViewDidLoad(){
    console.log(this.name);
    firebase.database().ref('/coaches/').child(this.name).once('value').then((snapshot)=>{
    const b = snapshot.val();
    console.log(b);
    
    if(b.first!=="stu1"){
    this.students.push(b.first);
    }
    if(b.second!=="stu2"){
    this.students.push(b.second);
    }
    if(b.third!=="stu3"){
    this.students.push(b.third);
    }
    console.log(this.students);
  })


}
viewPlan(sliding:ItemSliding, item){
  sliding.close();
  this.navCtrl.push(PlanPage,item)
}
}

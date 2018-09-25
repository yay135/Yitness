import { Component } from "@angular/core";
import { ViewController} from 'ionic-angular';
import firebase from 'firebase';

@Component({
    template: `
      <ion-list>
        <ion-item *ngFor="let item of exer">
        <button ion-button color = "secondary" (click)=close(item)>
        {{item.name}}
        </button>
        </ion-item>
      </ion-list>
    `
  })
  export class PopPage {
      exer=[];
    constructor(public viewCtrl: ViewController) {
        firebase.database().ref("/exercise").once('value').then((snapshot)=>{
           this.exer=snapshot.val();
           console.log(this.exer)
        });
    }
  
    close(item) {
      console.log(item);
      this.viewCtrl.dismiss(item);
    }
  }
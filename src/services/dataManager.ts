import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {AuthService} from './auth';
import {UserBasicInfo} from './userBasicInfo.interface';
import 'rxjs/Rx';
@Injectable()
export class DataManager{
    private userBasicInfo:UserBasicInfo;
    constructor(private http:Http, private auth:AuthService){
    }
    DLUserBasicInfo(token:string){
        const userId = this.auth.getAuthenticatedUser().uid;
        return this.http.get("https://gymapp-7ab3c.firebaseio.com/"+userId+"/userbasic.json?auth="+token).map((response: Response)=>{
            return response.json();}).do((data)=>{
                this.userBasicInfo=data;
            });
        
    }
    getUserBasicInof(){
        if (!this.userBasicInfo){
            console.log("created an empty one")
            this.userBasicInfo={
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
                isCoach:"false",
              }
        }
        return this.userBasicInfo;
    }
    UPUserBasicInfo(token:string){
        let t = this.userBasicInfo;
        const userId = this.auth.getAuthenticatedUser().uid;
        return this.http.put("https://gymapp-7ab3c.firebaseio.com/"+userId+"/userbasic.json?auth="+token,t).map((response:Response)=>{
            return response.json();
        });
    }
    putUserBasicInfo(data:UserBasicInfo){
       this.userBasicInfo=data;
    }
} 
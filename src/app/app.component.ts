import { Component, ViewChild } from '@angular/core';
import { Platform,NavController, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { AuthService } from "../services/auth";
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { PlanPage } from "../pages/plan/plan";
import { CoachPage } from "../pages/coach/coach";
import { StudentPage } from "../pages/student/student";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  planPage = PlanPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;


  constructor(platform: Platform, private authService: AuthService,private menuCtrl: MenuController,
    statusBar: StatusBar, splashScreen: SplashScreen) {
      firebase.initializeApp({
        apiKey: "AIzaSyCvF4uhrtr4fK0q8fKfldDth9dr0257x18",
            authDomain: "gymapp-7ab3c.firebaseapp.com",
            databaseURL: "https://gymapp-7ab3c.firebaseio.com",
    projectId: "gymapp-7ab3c",
    storageBucket: "gymapp-7ab3c.appspot.com",
    messagingSenderId: "857607056717"

});
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    this.isAuthenticated = true;
    this.nav.setRoot(HomePage);
  } else {
    this.isAuthenticated = false;
    this.nav.setRoot(SigninPage);
  }
});
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
onLoad(page: any) {
  this.nav.setRoot(page);
  this.menuCtrl.close();
}

onLogout() {
  this.authService.logout();
  this.menuCtrl.close();
  this.nav.setRoot(SigninPage);
}
}

import { FirebaseService } from './../providers/firebase-service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Settings } from '../providers/providers';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    settings: Settings,
    private geolocation: Geolocation,
    private firebaseService: FirebaseService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      firebaseService.authState.subscribe(user => {
        if (user) {
          this.rootPage = 'TabsPage';
        } else {
          this.rootPage = 'WelcomePage';
        }
      });
    });
  }
}

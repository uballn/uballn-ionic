import { Geolocation } from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';
import { FirebaseService } from './../providers/firebase-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Settings } from '../providers/providers';
import { MyApp } from './app.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';
import { Games } from '../data/providers/games';

const firebaseConfig = {
    apiKey: "AIzaSyAHJifVSUazzTFUH-yW7rIc3ZrjYz0phco",
    authDomain: "uballn-basketball-2f8d6.firebaseapp.com",
    databaseURL: "https://uballn-basketball-2f8d6.firebaseio.com",
    projectId: "uballn-basketball-2f8d6",
    storageBucket: "uballn-basketball-2f8d6.appspot.com",
    messagingSenderId: "929792889581"
  };

  export function provideSettings(storage: Storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new Settings(storage, {
      option1: true,
      option2: 'Ionitron J. Framework',
      option3: '3',
      option4: 'Hello'
    });
  }

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      tabsHideOnSubPages: true
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Games,
    Geofence,
    Geolocation,
        { provide: Settings,
          useFactory: provideSettings,
          deps: [Storage]
        },
        { provide: ErrorHandler,
          useClass: IonicErrorHandler
        },
    FirebaseService
  ]
})
export class AppModule {}
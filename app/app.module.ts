import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { PetparentProvider } from '../providers/petparent/petparent';
import { HttpClientModule } from '@angular/common/http';  
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { Camera } from '@ionic-native/camera';
import { PetsitterProvider } from '../providers/petsitter/petsitter';
import { PetupdateProvider } from '../providers/petupdate/petupdate';

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [HttpClientModule, 
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [HttpClientModule, 
    StatusBar,
    SplashScreen, Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    PetparentProvider,
    PetsitterProvider,
    PetupdateProvider
  ]
})
export class AppModule {}

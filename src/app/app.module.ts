import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FishfirePage } from '../pages/fishfire/fishfire';
import { ChikenjoPage } from '../pages/chikenjo/chikenjo';
import { FrancefirePage } from '../pages/francefire/francefire';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FishfirePage,ChikenjoPage,FrancefirePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FishfirePage,ChikenjoPage,FrancefirePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

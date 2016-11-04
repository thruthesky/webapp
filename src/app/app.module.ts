import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


import { App } from '../providers/app';
import { FireModule } from '../fireframe2/fire-module';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '2e401812'
  }
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
     CloudModule.forRoot(cloudSettings),
    FireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [ Storage, App ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SampleHomePage } from '../fireframe2/sample-pages/home/home';
import { LoginPage } from '../fireframe2/sample-pages/login/login';
import { RegisterPage } from '../fireframe2/sample-pages/register/register';
import { ResignPage } from '../fireframe2/sample-pages/resign/resign';


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
    SampleHomePage,
    LoginPage,
    RegisterPage,
    ResignPage
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
    SampleHomePage,
    LoginPage,
    RegisterPage,
    ResignPage
  ],
  providers: []
})
export class AppModule {}

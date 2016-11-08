import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';

import { Deploy } from '@ionic/cloud-angular';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, public deploy: Deploy ) {
    platform.ready().then(() => {


      if ( platform.is('cordova') ) this.updateApp();

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();


    });
  }
  /**
   * 30 초 마다 앱이 업데이트 되었는지 확인을 한다.
   */
  updateApp() {
    this.updateSnapshot();
    setInterval( () => this.updateSnapshot(), 300 * 1000 );
  }
  updateSnapshot() {
    console.log("MyApp::updateSnapshot()");
      this.deploy.check().then( (snapshotAvailable: boolean) => {
        if ( snapshotAvailable ) { // snapshotAvailable 이 true 이면, 새로운 snapshot 을 사용 할 수 있다.
          this.deploy.download().then( () => { // 새로운 snapshot 을 다운로드
            return this.deploy.extract() // snapshot 압축 해제
              .then( () => { // reload 해서 새로운 snapshot 을 적용
                this.deploy.load();
              } );
          });
        }
      });
  }
}

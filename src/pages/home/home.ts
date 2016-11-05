import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../../fireframe2/sample-pages/login/login';
import { UserTest } from '../../fireframe2/test/user-test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private userTest: UserTest ) {
    this.navCtrl.setRoot(LoginPage);

//    this.userTest.test( () => {} );

  }

}

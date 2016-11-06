import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SampleHomePage } from '../../fireframe2/sample-pages/home/home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl.setRoot(SampleHomePage);
  }

}

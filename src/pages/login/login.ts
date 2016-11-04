import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../fireframe2/user';
import { App, USER_LOGIN } from '../../providers/app';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  data = <USER_LOGIN> {};
  loginData: USER_LOGIN = null;
  constructor(
    public navCtrl: NavController,
    private user: User,
    private app: App ) {
      console.log('LoginPage::constructor()');

      this.checkUserLogin();
  }

  checkUserLogin() {
      this.app.userLoggedIn( ( user: USER_LOGIN ) => {
        console.log('Yes, user has logged in as : ' + user.email );
        this.loginData = user;
      }, () => {
        console.log('No, user not logged in');
      });
  }
  ionViewDidLoad() {
  }
  onClickHome() {
    this.navCtrl.setRoot( HomePage );
  }
  onClickLogin() {
    console.log('onClickLogin()');
    this.user
      .set('email', this.data.email)
      .set('password', this.data.password)
      .login( re => {
        console.log('login success : user has logged in? re: ', re, this.user.logged());
        let data = { email: this.data.email, uid: re.uid };
        this.app.setUserLoginData( data, () => this.checkUserLogin() );
      }, e => {
        alert( 'Login Error: ' + e );
      } );
  }
  onClickLogout() {
    this.app.logout( () => this.loginData = null );
  }
  onClickRegister() {
    console.log('onClickRegister()');
  }

}

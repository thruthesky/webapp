import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface USER_LOGIN {
  email: string;
  password?: string;
  uid?: string;
};

@Injectable()
export class App {

  static user;

  constructor(
    private storage: Storage
  ) {
  }


  setUserLoginData( data: USER_LOGIN, callback? ) {
    this.storage
      .set( 'user.login', JSON.stringify( data ) )
      .then( callback );
  }
  getUserLoginData( callback ) {
    this.storage
      .get('user.login')
      .then( callback );
  }
  userLoggedIn( yesCallback, noCallback ) {
    this.getUserLoginData( ( re ) => {
      if ( re == null || re == '' ) return noCallback();
      try {
        let data: USER_LOGIN = JSON.parse( re );
        console.log('App::userLoggedIn() re: ', re, data);
        if ( data == null ) return noCallback();
        if ( data.email !== void 0 ) yesCallback( data );
        else noCallback();
      }
      catch ( e ) {
        noCallback( e );
      }
    })
  }
  logout( callback ) {
    this.storage
      .remove( 'user.login' )
      .then( callback );
  }

}

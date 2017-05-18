import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  user: BehaviorSubject<firebase.User> = new BehaviorSubject<any>(false);
  private isLogged: boolean;
  private provider: firebase.auth.AuthProvider;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      this.user.next(user);
    });
  }

  loginFacebook() {
    console.log('logging in with Facebook');
    this.provider = new firebase.auth.FacebookAuthProvider();
    this.login(this.provider);
  }

  loginGoogle() {
    console.log('logging in with Google');
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.login(this.provider);
  }

  private login(provider: firebase.auth.AuthProvider) {
    this.afAuth.auth.signInWithRedirect(provider);
  }

  logout() {
    console.log('log out...');
    this.afAuth.auth.signOut();
  }

}

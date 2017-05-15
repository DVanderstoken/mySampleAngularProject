import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  user: BehaviorSubject<firebase.User> = new BehaviorSubject<any>(false);

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      this.user.next(user);
    });
  }

  loginFacebook() {
    console.log('logging in with Facebook');
    //this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  loginGoogle() {
    console.log('logging in with Google');
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    console.log('log out...');
    this.afAuth.auth.signOut();
  }

}

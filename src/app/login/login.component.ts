import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: firebase.User;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.user = user;
    });
  }

  loginFacebook() {
    this.authService.loginFacebook();
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

  logout() {
    this.authService.logout();
  }


}

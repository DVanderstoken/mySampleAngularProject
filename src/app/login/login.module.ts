import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [
    LoginComponent
  ],
  providers: [AngularFireAuth,
    AuthService],
  declarations: [LoginComponent]
})
export class LoginModule { }

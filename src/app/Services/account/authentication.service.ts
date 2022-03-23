import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase/compat/app';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { User } from './user';
import { UserInfoService } from '../UserDetails/user-info.service';
       
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;
  user: User;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone,
    private userInfo: UserInfoService
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
      } else {
        this.userData = null;
      }
    })
  }
  // Login in with email/password
  SignIn(email: string, password: string) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.ngZone.run(() => {
          if(res.user.emailVerified){
            console.log("email verified", res.user);

            this.router.navigate(['update-profile']);
        
          }else{ 
            console.log("email not verified");
            this.SendVerificationMail();
            this.router.navigate(['verify']);    
          }
        });
      }).catch((error: { message: any; }) => {
        window.alert(error.message)
      })
  }
  // Register user with email/password
async RegisterUser(email, password) {
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, password)
    .then(()=>{
      this.SendVerificationMail();
      this.router.navigateByUrl("verify");
    })
  }
  // Email verification when new user register
  async SendVerificationMail() {
     return (await this.ngFireAuth.currentUser).sendEmailVerification();
  }
  // Recover password
  async ForgotPassword(passwordResetEmail) {
    return await this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail).then(res=>{
      console.log(res);
      this.router.navigateByUrl("signin");
    }).catch(err=>{
      console.log(err);
    })
  }
  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }
  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }
  
  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['profile']);
        })
      // this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }
 
  // Sign-out 
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      this.router.navigate(['user-login']);
    })
  }
}
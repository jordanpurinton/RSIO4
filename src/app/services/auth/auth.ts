
import { Injectable } from '@angular/core';
import { AngularFireLiteAuth } from 'angularfire-lite';
import { AngularFireLiteDatabase } from 'angularfire-lite';

// import { AngularFireAuth } from 'angularfire2/auth';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import firebase, { User } from 'firebase/app';

@Injectable()
export class AuthProvider {

  user: BehaviorSubject<User> = new BehaviorSubject(null)
  constructor(public auth: AngularFireLiteAuth, public db: AngularFireLiteDatabase) { }

  // this.AngularFireLiteAuth.auth
  // .switchMap(user => {
  //   if (user) {
  //     return this.afs.doc<User>('users/${user.uid}').valueChanges()
  //   } else {
  //     return Observable.of(null)
  //   }
  // })

  signInUser(newEmail: string, newPassword: string) {
    return this.auth.signin(newEmail, newPassword);
  }

  signUpUser(newEmail: string, newPassword: string, role: string) {
    return this.auth.signup(newEmail, newPassword, role);
  }

  // googleSignUp(): Promise<void> {
  //   return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }

  resetPassword(email: string) {
    return this.auth.sendPasswordResetEmail(email);
  }

  signOutUser() {
    return this.auth.signout();
  }

}

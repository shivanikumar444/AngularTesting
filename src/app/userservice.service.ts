import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { HeaderComponent } from '../app/header/header.component';


// import * as userData from './model/user.json';

@Injectable()
export class UserserviceService {
  private basePath = '/games';
  public signInState = false;
  // public header: HeaderComponent;

  constructor(
    private db: AngularFireDatabase,
    private auth: FirebaseApp,
    private http: HttpClient,
    private router: Router,
    public header: HeaderComponent) { }

  signIn(email, pws) {
    this.auth.auth().signInWithEmailAndPassword(email, pws).then(
      success => (
        this.signInState = true,
        this.router.navigate([
        'home'
      ]))
    ).catch(
      error => alert(error)
    );
    return this.signInState;
  }
  getUserData(): Observable<any> {
    const apiUrl = '../assets/user.json';
    return this.http.get(apiUrl);
    // .map( (response: Response) => {
    //    const data = response.json();
    //    return data;
    // });
  }

  getDbData(path): Observable<any[]> {
    console.log(this.db.list(path).valueChanges());
    return this.db.list(path).valueChanges();
  }

  addGame(data) {
    const obj = this.db.database.ref(this.basePath);
    obj.push(data);
    alert(' Sucessfully added');
    this.router.navigate([
      'home'
    ]);
    console.log('Success');
  }

  userSignUp(email: string, pws: string) {
    this.auth.auth().createUserWithEmailAndPassword(email, pws).then(
      success => this.router.navigate([
        'login'
      ])
    ).catch(
      error => console.log('In the error block')
    );
    // firebase.auth().createUserWithEmailAndPassword(email, pws).catch(
    //   error => console.log('In the error block')
    // );
  }

  setLoggedin() {
    this.header.loggedIn = true;
  }
}

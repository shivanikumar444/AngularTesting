import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { UserserviceService } from '../userservice.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  public email: FormControl;
  public password: FormControl;
  // public header: HeaderComponent;

  constructor(private _formBuilder: FormBuilder, private _userService: UserserviceService, private router: Router) { }

  ngOnInit(): void {
    this.login = this._formBuilder.group({
      'email': [this.email, Validators.required],
      'password': [this.password, Validators.required]
    });
  }

  submit() {
    console.log(`Submit clicked : email = ` + this.login.value.email + ` pws = ` + this.login.value.password);
    this._userService.signIn(this.login.value.email, this.login.value.password);
    // const userData = this._userService.getUserData();
    // userData.forEach((elements) => {
    //   console.log(elements);
    //   for (let index = 0; index < elements.length; index++) {
    //     const element = elements[index];
    //     if ( element.email === this.login.value.email ) {
    //       if (element.password === this.login.value.password) {
    //         this._userService.setLoggedin();
    //         this.router.navigate([
    //           'home'
    //         ]);
    //         break;
    //       }
    //     }
    //   }
    // });
  }
}

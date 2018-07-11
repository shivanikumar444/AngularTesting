import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  public signup: FormGroup;
  public email: FormControl;
  public password: FormControl;

  constructor(private _formBuilder: FormBuilder, private auth: UserserviceService) { }

  ngOnInit(): void {
    this.signup = this._formBuilder.group({
      'email': [this.email, Validators.required],
      'password': [this.password, Validators.required]
    });
  }

  onSignUp() {
    console.log(`Submit clicked : email = ` + this.signup.value.email + ` pws = ` + this.signup.value.password);

    this.auth.userSignUp(this.signup.value.email, this.signup.value.password);

  }

}

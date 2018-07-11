import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-insertgame',
  templateUrl: './insertgame.component.html',
  styleUrls: ['./insertgame.component.sass']
})
export class InsertgameComponent implements OnInit {
  angForm: FormGroup;
  constructor(private userService: UserserviceService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }
  addGame(name, price) {
    const dataObj = {
      name: name,
      price: price
    };
    this.userService.addGame(dataObj);
  }

  ngOnInit() {
    this.userService.setLoggedin();
  }
}

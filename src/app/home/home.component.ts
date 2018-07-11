import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public dbData: Observable<any[]>;

  constructor(private userService: UserserviceService) { }

  ngOnInit() {
    this.userService.setLoggedin();
  }

  getDbData(path) {
    return this.userService.getDbData(path);
  }
}

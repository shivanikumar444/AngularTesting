import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.sass']
})
export class GamelistComponent implements OnInit {
  public games: Observable<any[]>;

  constructor(private userService: UserserviceService) { }

  ngOnInit() {
    this.games = this.getGames('/games');
    this.userService.setLoggedin();
  }

  getGames(path) {
    return this.userService.getDbData(path);
  }

}

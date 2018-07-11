import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { GamelistComponent } from './gamelist.component';
import { UserserviceService } from '../userservice.service';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { Firebase } from '../model/firebase';
import { HttpTestingController } from '../../../node_modules/@angular/common/http/testing';

const MockFireBase: Firebase = {
  games: {
    name: 'Test Game',
    price: '1234'
  }};

describe('GamelistComponent', () => {
  let component: GamelistComponent;
  let fixture: ComponentFixture<GamelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamelistComponent ],
      providers: [
        UserserviceService,
        HttpTestingController,
        AngularFireDatabase]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get firebase data', inject([UserserviceService, HttpTestingController],
    (service: UserserviceService, dbMock: HttpTestingController) => {
      const mockResponse = MockFireBase;
      component.getGames('/games').subscribe(data => expect(data[0].email).toContain('test'));
      dbMock.expectOne('/games').flush(mockResponse);
    }));
});

import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { UserserviceService } from './userservice.service';
import { Firebase } from './model/firebase';


const MockFireBase: Firebase = {
  games: {
    name: 'Test Game',
    price: '1234'
  },
  user: {
    email: 'test@test.com',
    password: 'Q!w2e3r4'
  }
};


describe('UserserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers: [ UserserviceService, HttpClient, Http, { provide: AngularFireDatabase, useclass: MockFireBase }],
      providers: [
        { provide: UserserviceService, useValue: MockFireBase},
        HttpClient,
        Http
      ],
      imports: [HttpClientTestingModule, AngularFireDatabaseModule]
    });
  });

  it('should be created', inject([UserserviceService], (service: UserserviceService) => {
    expect(service).toBeTruthy();
  }));

  it('should check login', inject(
    [UserserviceService, HttpClientTestingModule],
    (service: UserserviceService, httpMock: HttpClientTestingModule) => {
      const state = service.signIn(MockFireBase.user.email, MockFireBase.user.password);
      expect(state).toEqual(true);
    }
  ));

  // it('should check user', inject(
  //   [UserserviceService, HttpTestingController],
  //   (service: UserserviceService, httpMock: HttpTestingController) => {
  //   service.getUserData().subscribe(data => expect(data[0].email).toEqual('test@test.com'));

  //   const req = httpMock.expectOne('../assets/user.json');
  //   expect(req).toBeDefined();
  //   expect(req.request.method).toEqual('GET');
  //   httpMock.verify();
  // }));

  it('should check the firebase data', inject([UserserviceService, HttpTestingController, AngularFireDatabase],
    (service: UserserviceService, httpMock: HttpTestingController) => {
      const mockResponse = MockFireBase;
      service.getDbData('/games').subscribe(data => expect(data[0].email).toEqual('test'));
      httpMock.expectOne('/games').flush(mockResponse);
  }));
});

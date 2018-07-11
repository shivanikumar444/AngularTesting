import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { HomeComponent } from './home.component';
import { UserserviceService } from '../userservice.service';
import { appRoutes } from '../routerConfig';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ UserserviceService, AngularFireDatabase ],
      imports: [ AngularFireDatabaseModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(
    async(inject([Router], (route) => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      router = route;
    }))
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

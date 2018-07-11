import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { LoginComponent } from './login.component';
import { UserserviceService } from '../userservice.service';
import { appRoutes } from '../routerConfig';
import { HomeComponent } from '../home/home.component';
import { SignupComponent } from '../signup/signup.component';
import { InsertgameComponent } from '../insertgame/insertgame.component';
import { GamelistComponent } from '../gamelist/gamelist.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        HomeComponent,
        SignupComponent,
        InsertgameComponent,
        GamelistComponent
      ],
      providers: [ FormBuilder, UserserviceService, HttpClient ],
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        ReactiveFormsModule,
        HttpClientTestingModule,
        AngularFireDatabaseModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(
    async(inject([Router], (route) => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      router = route;
    }))
  );


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should input validation', () => {
    component.login.controls['email'].setValue('test@test.com');
    component.login.controls['password'].setValue('Q!w2e3r4');
    expect(component.login.value).toEqual({email: 'test@test.com', password: 'Q!w2e3r4'});
  });

  it('should redirect to home', () => {
    spyOn(router, 'navigate');
    router.navigate(['home']);
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});

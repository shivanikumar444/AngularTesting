import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { HomeComponent } from '../home/home.component';
import { UserserviceService } from '../userservice.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { AngularFireDatabaseModule } from '../../../node_modules/angularfire2/database';
import { LoginComponent } from '../login/login.component';
import { InsertgameComponent } from '../insertgame/insertgame.component';
import { GamelistComponent } from '../gamelist/gamelist.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        HomeComponent,
        InsertgameComponent,
        GamelistComponent,
        SignupComponent ],
      providers: [
        FormBuilder,
        UserserviceService,
        HttpClient
      ],
      imports: [
        ReactiveFormsModule,
        AngularFireDatabaseModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should signup', () => {
    spyOn(component, 'onSignUp');
    const nativeElement = fixture.nativeElement;
    const closeButton = nativeElement.querySelector('.signup');
    closeButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.onSignUp).toHaveBeenCalledWith(true);
  });
});

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignupComponent,
        HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(
    async(inject([Router], (route) => {
      fixture = TestBed.createComponent(SignupComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      router = route;
    }))
  );

  it('should redirect to home', () => {
    spyOn(router, 'navigate');
    router.navigate(['home']);
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

});

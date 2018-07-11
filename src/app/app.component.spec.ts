import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { appRoutes } from './routerConfig';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { InsertgameComponent } from './insertgame/insertgame.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';


// import { Router } from '../../node_modules/@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        HomeComponent,
        SignupComponent,
        InsertgameComponent,
        GamelistComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        AngularFireDatabaseModule,

      ],
      providers: [AngularFireDatabase]
    }).compileComponents();
  }));

  beforeEach(
    async(inject([Router], (route) => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      router = route;
    }))
  );

  it('should create the app', async(() => {
    expect(component instanceof AppComponent).toBeTruthy();
  }));
});

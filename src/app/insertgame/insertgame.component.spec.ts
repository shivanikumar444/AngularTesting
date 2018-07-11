import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { InsertgameComponent } from './insertgame.component';
import { AngularFireDatabaseModule } from '../../../node_modules/angularfire2/database';
import { UserserviceService } from '../userservice.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';

describe('InsertgameComponent', () => {
  let component: InsertgameComponent;
  let fixture: ComponentFixture<InsertgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertgameComponent ],
      providers: [
        FormBuilder,
        UserserviceService,
        HttpClient
      ],
      imports: [
        ReactiveFormsModule,
        AngularFireDatabaseModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

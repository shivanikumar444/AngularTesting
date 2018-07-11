import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertgameComponent } from './insertgame.component';

describe('InsertgameComponent', () => {
  let component: InsertgameComponent;
  let fixture: ComponentFixture<InsertgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertgameComponent ]
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

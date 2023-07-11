import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvttLocalApiComponent } from './fvtt-local-api.component';

describe('FvttLocalApiComponent', () => {
  let component: FvttLocalApiComponent;
  let fixture: ComponentFixture<FvttLocalApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FvttLocalApiComponent]
    });
    fixture = TestBed.createComponent(FvttLocalApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

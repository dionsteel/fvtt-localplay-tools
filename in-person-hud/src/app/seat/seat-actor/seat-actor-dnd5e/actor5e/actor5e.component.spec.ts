import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actor5eComponent } from './actor5e.component';

describe('Actor5eComponent', () => {
  let component: Actor5eComponent;
  let fixture: ComponentFixture<Actor5eComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Actor5eComponent]
    });
    fixture = TestBed.createComponent(Actor5eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

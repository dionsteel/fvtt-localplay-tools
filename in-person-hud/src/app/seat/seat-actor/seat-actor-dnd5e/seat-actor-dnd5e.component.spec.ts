import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatActorDnd5eComponent } from './seat-actor-dnd5e.component';

describe('SeatActorDnd5eComponent', () => {
  let component: SeatActorDnd5eComponent;
  let fixture: ComponentFixture<SeatActorDnd5eComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatActorDnd5eComponent]
    });
    fixture = TestBed.createComponent(SeatActorDnd5eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

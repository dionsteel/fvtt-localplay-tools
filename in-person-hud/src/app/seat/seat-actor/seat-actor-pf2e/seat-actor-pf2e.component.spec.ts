import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatActorPF2eComponent } from './seat-actor-pf2e.component';

describe('SeatActorPF2eComponent', () => {
  let component: SeatActorPF2eComponent;
  let fixture: ComponentFixture<SeatActorPF2eComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatActorPF2eComponent]
    });
    fixture = TestBed.createComponent(SeatActorPF2eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

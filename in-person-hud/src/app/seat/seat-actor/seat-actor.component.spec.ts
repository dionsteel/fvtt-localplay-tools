import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatActorComponent } from './seat-actor.component';

describe('SeatActorComponent', () => {
  let component: SeatActorComponent;
  let fixture: ComponentFixture<SeatActorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SeatActorComponent]
    });
    fixture = TestBed.createComponent(SeatActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

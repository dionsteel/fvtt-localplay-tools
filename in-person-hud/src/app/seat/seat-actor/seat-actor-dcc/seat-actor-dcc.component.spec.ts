import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatActorDccComponent } from './seat-actor-dcc.component';

describe('SeatActorDccComponent', () => {
  let component: SeatActorDccComponent;
  let fixture: ComponentFixture<SeatActorDccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatActorDccComponent]
    });
    fixture = TestBed.createComponent(SeatActorDccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

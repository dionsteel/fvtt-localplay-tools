import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatActorStarfinderComponent } from './seat-actor-starfinder.component';

describe('SeatActorStarfinderComponent', () => {
  let component: SeatActorStarfinderComponent;
  let fixture: ComponentFixture<SeatActorStarfinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatActorStarfinderComponent]
    });
    fixture = TestBed.createComponent(SeatActorStarfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

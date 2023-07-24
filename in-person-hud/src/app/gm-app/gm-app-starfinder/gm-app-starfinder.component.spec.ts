import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmAppStarfinderComponent } from './gm-app-starfinder.component';

describe('GmAppStarfinderComponent', () => {
  let component: GmAppStarfinderComponent;
  let fixture: ComponentFixture<GmAppStarfinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GmAppStarfinderComponent]
    });
    fixture = TestBed.createComponent(GmAppStarfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvttApiBridgeComponent } from './fvtt-api-bridge.component';

describe('FvttApiBridgeComponent', () => {
  let component: FvttApiBridgeComponent;
  let fixture: ComponentFixture<FvttApiBridgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FvttApiBridgeComponent]
    });
    fixture = TestBed.createComponent(FvttApiBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmAppPf2eComponent } from './gm-app-pf2e.component';

describe('GmAppPf2eComponent', () => {
  let component: GmAppPf2eComponent;
  let fixture: ComponentFixture<GmAppPf2eComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GmAppPf2eComponent]
    });
    fixture = TestBed.createComponent(GmAppPf2eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

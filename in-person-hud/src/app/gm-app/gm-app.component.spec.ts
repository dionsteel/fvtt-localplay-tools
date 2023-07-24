import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GMAppComponent } from './gm-app.component';

describe('GMAppComponent', () => {
  let component: GMAppComponent;
  let fixture: ComponentFixture<GMAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GMAppComponent],
    });
    fixture = TestBed.createComponent(GMAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

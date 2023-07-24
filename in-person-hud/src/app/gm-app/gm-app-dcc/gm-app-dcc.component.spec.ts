import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmAppDccComponent } from './gm-app-dcc.component';

describe('GmAppDccComponent', () => {
  let component: GmAppDccComponent;
  let fixture: ComponentFixture<GmAppDccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GmAppDccComponent]
    });
    fixture = TestBed.createComponent(GmAppDccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

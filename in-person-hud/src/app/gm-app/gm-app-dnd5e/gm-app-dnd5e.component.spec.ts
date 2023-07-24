import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmAppDnd5eComponent } from './gm-app-dnd5e.component';

describe('GmAppDnd5eComponent', () => {
  let component: GmAppDnd5eComponent;
  let fixture: ComponentFixture<GmAppDnd5eComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GmAppDnd5eComponent]
    });
    fixture = TestBed.createComponent(GmAppDnd5eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actorpf2eComponent } from './actorpf2e.component';

describe('Actorpf2eComponent', () => {
  let component: Actorpf2eComponent;
  let fixture: ComponentFixture<Actorpf2eComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Actorpf2eComponent]
    });
    fixture = TestBed.createComponent(Actorpf2eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

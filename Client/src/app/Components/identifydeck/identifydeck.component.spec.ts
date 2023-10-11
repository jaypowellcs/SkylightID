import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifydeckComponent } from './identifydeck.component';

describe('IdentifydeckComponent', () => {
  let component: IdentifydeckComponent;
  let fixture: ComponentFixture<IdentifydeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentifydeckComponent]
    });
    fixture = TestBed.createComponent(IdentifydeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

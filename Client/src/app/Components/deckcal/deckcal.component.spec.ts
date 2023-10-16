import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckcalComponent } from './deckcal.component';

describe('DeckcalComponent', () => {
  let component: DeckcalComponent;
  let fixture: ComponentFixture<DeckcalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckcalComponent]
    });
    fixture = TestBed.createComponent(DeckcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

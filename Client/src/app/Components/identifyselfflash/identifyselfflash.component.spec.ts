import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyselfflashComponent } from './identifyselfflash.component';

describe('IdentifyselfflashComponent', () => {
  let component: IdentifyselfflashComponent;
  let fixture: ComponentFixture<IdentifyselfflashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentifyselfflashComponent]
    });
    fixture = TestBed.createComponent(IdentifyselfflashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

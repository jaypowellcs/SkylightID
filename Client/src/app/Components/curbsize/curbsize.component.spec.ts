import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurbsizeComponent } from './curbsize.component';

describe('CurbsizeComponent', () => {
  let component: CurbsizeComponent;
  let fixture: ComponentFixture<CurbsizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurbsizeComponent]
    });
    fixture = TestBed.createComponent(CurbsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

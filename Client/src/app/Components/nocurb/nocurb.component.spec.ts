import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocurbComponent } from './nocurb.component';

describe('NocurbComponent', () => {
  let component: NocurbComponent;
  let fixture: ComponentFixture<NocurbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NocurbComponent]
    });
    fixture = TestBed.createComponent(NocurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

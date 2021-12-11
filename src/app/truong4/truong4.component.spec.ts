import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Truong4Component } from './truong4.component';

describe('Truong4Component', () => {
  let component: Truong4Component;
  let fixture: ComponentFixture<Truong4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Truong4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Truong4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

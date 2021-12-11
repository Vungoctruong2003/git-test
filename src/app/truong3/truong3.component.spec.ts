import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Truong3Component } from './truong3.component';

describe('Truong3Component', () => {
  let component: Truong3Component;
  let fixture: ComponentFixture<Truong3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Truong3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Truong3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

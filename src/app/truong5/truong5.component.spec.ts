import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Truong5Component } from './truong5.component';

describe('Truong5Component', () => {
  let component: Truong5Component;
  let fixture: ComponentFixture<Truong5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Truong5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Truong5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Duong3Component } from './duong3.component';

describe('Duong3Component', () => {
  let component: Duong3Component;
  let fixture: ComponentFixture<Duong3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Duong3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Duong3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Duong5Component } from './duong5.component';

describe('Duong5Component', () => {
  let component: Duong5Component;
  let fixture: ComponentFixture<Duong5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Duong5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Duong5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

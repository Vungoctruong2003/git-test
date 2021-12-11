import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuongComponent } from './duong.component';

describe('DuongComponent', () => {
  let component: DuongComponent;
  let fixture: ComponentFixture<DuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

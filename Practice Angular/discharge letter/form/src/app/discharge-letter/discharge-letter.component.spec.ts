import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeLetterComponent } from './discharge-letter.component';

describe('DischargeLetterComponent', () => {
  let component: DischargeLetterComponent;
  let fixture: ComponentFixture<DischargeLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DischargeLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

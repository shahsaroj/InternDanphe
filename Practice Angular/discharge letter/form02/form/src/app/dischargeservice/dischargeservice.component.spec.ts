import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeserviceComponent } from './dischargeservice.component';

describe('DischargeserviceComponent', () => {
  let component: DischargeserviceComponent;
  let fixture: ComponentFixture<DischargeserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DischargeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

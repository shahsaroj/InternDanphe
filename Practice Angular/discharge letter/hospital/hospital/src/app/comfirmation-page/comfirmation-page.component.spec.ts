import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmationPageComponent } from './comfirmation-page.component';

describe('ComfirmationPageComponent', () => {
  let component: ComfirmationPageComponent;
  let fixture: ComponentFixture<ComfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfirmationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

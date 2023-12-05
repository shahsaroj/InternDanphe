import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventComponent } from './invent.component';

describe('InventComponent', () => {
  let component: InventComponent;
  let fixture: ComponentFixture<InventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

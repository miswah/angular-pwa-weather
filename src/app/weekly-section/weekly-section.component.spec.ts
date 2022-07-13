import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySectionComponent } from './weekly-section.component';

describe('WeeklySectionComponent', () => {
  let component: WeeklySectionComponent;
  let fixture: ComponentFixture<WeeklySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

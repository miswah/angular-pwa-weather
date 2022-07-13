import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniHeroSectionComponent } from './mini-hero-section.component';

describe('MiniHeroSectionComponent', () => {
  let component: MiniHeroSectionComponent;
  let fixture: ComponentFixture<MiniHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniHeroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

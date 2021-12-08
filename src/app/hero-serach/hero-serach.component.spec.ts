import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSerachComponent } from './hero-serach.component';

describe('HeroSerachComponent', () => {
  let component: HeroSerachComponent;
  let fixture: ComponentFixture<HeroSerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSerachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

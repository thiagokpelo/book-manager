import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBoxComponent } from './cards-box.component';

describe('CardsBoxComponent', () => {
  let component: CardsBoxComponent;
  let fixture: ComponentFixture<CardsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

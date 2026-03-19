import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMercadosComponent } from './card-mercados.component';

describe('CardMercadosComponent', () => {
  let component: CardMercadosComponent;
  let fixture: ComponentFixture<CardMercadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMercadosComponent]
    });
    fixture = TestBed.createComponent(CardMercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

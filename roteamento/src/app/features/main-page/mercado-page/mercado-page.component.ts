import { Component } from '@angular/core';
import MockMercado, { IMercado } from './Mercados.mosck';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
  protected mercados: IMercado[] = [];

  constructor() {
    this.mercados = MockMercado
  }
}

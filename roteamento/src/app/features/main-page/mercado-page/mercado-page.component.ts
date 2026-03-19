import { Component } from '@angular/core';
import IMercado, { MockMercado } from './Mercados.mosck';
import MockComidas from '../comida-page/Comidas.mock';

@Component({
  selector: 'app-mercado-page',
  templateUrl: './mercado-page.component.html',
  styleUrls: ['./mercado-page.component.css']
})
export class MercadoPageComponent {
  protected mercados: IMercado[];

  constructor() {
    this.mercados = MockMercado
  }
}

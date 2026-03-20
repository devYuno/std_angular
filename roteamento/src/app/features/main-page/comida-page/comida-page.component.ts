import { Component } from '@angular/core';
import MockComidas, { IComida } from './Comidas.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})
export class ComidaPageComponent {
  protected comidas: IComida[] = []
  protected flagModal = false;
  protected selectedComida: IComida | null = null;

  constructor () {
    this.comidas = MockComidas;
  }

  openModal(comida: IComida) {
    if (!this.flagModal) {
      this.flagModal = true;
      this.selectedComida = comida;
    } 
  }

  closeModal(close: boolean) {
    if (!close) {
      this.flagModal = close;
      this.selectedComida = null;
    }
  }


}


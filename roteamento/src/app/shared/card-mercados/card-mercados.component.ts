import { Component, Input } from '@angular/core';
import { IMercado } from 'src/app/features/main-page/mercado-page/Mercados.mosck';

@Component({
  selector: 'app-card-mercados',
  templateUrl: './card-mercados.component.html',
  styleUrls: ['./card-mercados.component.css']
})
export class CardMercadosComponent {
  @Input()
    mercado!: IMercado;
}

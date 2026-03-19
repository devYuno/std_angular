import { Component, Input } from '@angular/core';
import { IComida } from 'src/app/features/main-page/comida-page/Comidas.mock';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  comida!: IComida;

}

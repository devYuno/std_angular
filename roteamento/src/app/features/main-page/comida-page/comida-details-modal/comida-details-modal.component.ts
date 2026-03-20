import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComida } from '../Comidas.mock';

@Component({
  selector: 'app-comida-details-modal',
  templateUrl: './comida-details-modal.component.html',
  styleUrls: ['./comida-details-modal.component.css']
})
export class ComidaDetailsModalComponent {

  @Input()
    comida?: IComida | null;

  @Output()
    onClose: EventEmitter<boolean> = new EventEmitter;

  closeModal() {
    this.onClose.emit(false)
  }
}

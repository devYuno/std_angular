import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-auth',
  imports: [],
  templateUrl: './modal-auth.html',
  styleUrl: './modal-auth.css',
})
export class ModalAuth {
  @Input()
  Title: string = ""

  @Output()
  onClose: EventEmitter<void> = new EventEmitter();
}

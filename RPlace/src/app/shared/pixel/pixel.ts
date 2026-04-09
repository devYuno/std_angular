import { Component, Input } from '@angular/core';
import { PixelModel } from './pixel.model';

@Component({
  selector: 'app-pixel',
  imports: [],
  templateUrl: './pixel.html',
  styleUrl: './pixel.css',
})

export class Pixel {
  @Input() pixel!: PixelModel;

  // @Input()
  // x!: number;
  // @Input()
  // y!: number;

  @Input()
  inputColor: string = "white";
 
  cor: string = "green";
  
  pintar() {
    this.cor = this.inputColor;
  }
}

import { Component, Input } from '@angular/core';
import { PixelModel } from './pixel.model';
import { ColoredPixel } from '../../domain/ColoredPixel/ColoredInterface';

@Component({
  selector: 'app-pixel',
  imports: [],
  templateUrl: './pixel.html',
  styleUrl: './pixel.css',
})

export class Pixel {
  @Input() pixel!: ColoredPixel;
}

import { Component, Output, output } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Pixel } from "../../shared/pixel/pixel";
import { RouterOutlet } from "@angular/router";
import { PixelModel } from '../../shared/pixel/pixel.model';

@Component({
  selector: 'app-home-page',
  imports: [Header, Pixel, RouterOutlet],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  pixels: PixelModel[] = [];
  pxSelecionado?: Pixel | null = null;

  @Output()
  cor?: string;

  t: Number = this.pixels.length
  

  ngOnInit() {
    


    for (let x = 0; x < 300; x++) {
      for (let y = 0; y < 300; y++) {
        this.pixels.push(new PixelModel(x, y, 'white'));
      }
    }

  }

  selecionar(px: Pixel) {
    this.pxSelecionado = px;
  }
}

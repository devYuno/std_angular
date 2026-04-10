import { Component, Output, output } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Pixel } from "../../shared/pixel/pixel";
import { RouterOutlet } from "@angular/router";
import { PixelModel } from '../../shared/pixel/pixel.model';
import { ColoredPixelApi } from '../../domain/ColoredPixel/colored.api';
import { ColoredPixel } from '../../domain/ColoredPixel/ColoredInterface';

@Component({
  selector: 'app-home-page',
  imports: [Header, Pixel, RouterOutlet],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  constructor(private api: ColoredPixelApi) { }

  pixels: ColoredPixel[] = [];
  pxSelecionado?: ColoredPixel | null = null;

  cor: string = "blue";

  ngOnInit() {

    for (let y = 0; y < 150; y++) {
      for (let x = 0; x < 150; x++) {
        this.pixels.push({x: x, y: y, color: "white"});
      }
    }

    this.api.getPixels().subscribe(
      res => {
        console.log(res.map((log) => {
          let pixel = this.pixels.find(p => p.x === log.x && p.y === log.y)

          if (pixel) {
            pixel = log
          }
        }))
      }
    )

  }

  selecionar(px: ColoredPixel) {
    this.pxSelecionado = px;
    px.color = this.cor;
    console.log(px.x, px.y)
  }
}

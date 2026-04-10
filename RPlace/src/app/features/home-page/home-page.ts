import { Component, Output, output } from '@angular/core';
import { Header } from "../../shared/header/header";
import { Pixel } from "../../shared/pixel/pixel";
import { RouterOutlet } from "@angular/router";
import { PixelModel } from '../../shared/pixel/pixel.model';
import { AuthApi } from '../../domain/auth.api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ColoredPixel } from '../../domain/ColoredPixel/ColoredInterface';
import { ColoredPixelApi } from '../../domain/ColoredPixel/colored.api';

@Component({
  selector: 'app-home-page',
  imports: [Header, Pixel, RouterOutlet],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  constructor(private api: ColoredPixelApi) { }

  pixels: PixelModel[] = [];
  pxSelecionado?: PixelModel | null = null;

  cor: string = "blue";

  ngOnInit() {

    for (let y = 0; y < 150; y++) {
      for (let x = 0; x < 150; x++) {
        this.pixels.push(new PixelModel(x, y, 'white'));
      }
    }

    this.api.getPixels().subscribe(
      res => {
        console.log(res.map((log) => {
          const pixel = this.pixels.find(p => p.x === log.x && p.y === log.y)

          if (pixel) {
            pixel.cor = log.color
          }
        }))
      }
    )

  }

  selecionar(px: PixelModel) {
    this.pxSelecionado = px;
    px.cor = this.cor;
    console.log(px.x, px.y)
  }
}

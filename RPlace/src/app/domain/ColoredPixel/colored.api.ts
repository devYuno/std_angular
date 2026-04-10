import { Injectable } from '@angular/core';
import { Api } from '../api';
import { Observable } from 'rxjs';
import { ColoredPixel } from './ColoredInterface';
import { PixelModel } from '../../shared/pixel/pixel.model';

@Injectable({
  providedIn: 'root',
})
export class ColoredPixelApi extends Api {
    getPixels = () : Observable<ColoredPixel[]> => {
      return this.client.get<ColoredPixel[]>(`${this.URL}/pixel`).pipe();
    }

    // paintPixel = (data: ColoredPixel) 
}

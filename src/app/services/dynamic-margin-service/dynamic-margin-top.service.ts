import { Injectable, Renderer2, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicMarginTopService {

  constructor() { }

  updateMarginTop(cover: ElementRef, details: ElementRef, renderer: Renderer2): void {
    const coverHeight = cover.nativeElement.offsetHeight;
    renderer.setStyle(details.nativeElement, 'margin-top', `${coverHeight}px`);
  }
}

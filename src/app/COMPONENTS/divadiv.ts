import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Llibre {
  constructor(
    public titol: string,
    public tematiques: string[]
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class TextService {

  private text: string = "";

  private llibre?: Llibre;

  setText(t: string) {
    this.text = t;
  }

  getText() {
    return this.text;
  }

  setLlibre(l: Llibre) {
    this.llibre = l;
  }

  getLlibre(): Llibre | undefined {
    return this.llibre;
  }
}

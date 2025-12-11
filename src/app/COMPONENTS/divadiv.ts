import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  private text: string = "";

  setText(t: string) {
    this.text = t;
  }

  getText() {
    return this.text;
  }
}

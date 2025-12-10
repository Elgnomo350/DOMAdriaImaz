import { Component } from '@angular/core';

@Component({
  selector: 'app-prova',
  imports: [],
  templateUrl: './prova.html',
  styleUrl: './prova.css',
})
export class Prova {

majus () {
  let titol = document.getElementById('queso');
  // @ts-ignore
  titol.textContent = titol.textContent.toUpperCase();
}



  constructor() {

  }
}

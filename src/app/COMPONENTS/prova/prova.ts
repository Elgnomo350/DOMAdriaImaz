import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {changeSize, countWords, yellowSubmarine} from '../../../assets/funcions.js';
@Component({
  selector: 'app-prova',
  standalone: true,
  templateUrl: './prova.html',
  styleUrl: './prova.css',
})

export class Prova implements OnInit{

  constructor() {

  }

  ngOnInit() {
    yellowSubmarine("titolProva");
    changeSize("taula", "35px")
    countWords("ipsum")
  }

  majus () {
  let titol = document.getElementById('queso');
  // @ts-ignore
  titol.textContent = titol.textContent.toUpperCase();
}

mostrarUrl () {
  let url = document.getElementById("url")!
  url.textContent = document.URL;
}


}

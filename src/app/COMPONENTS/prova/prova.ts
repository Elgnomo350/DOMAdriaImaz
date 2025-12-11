import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {changeSize, yellowSubmarine} from '../../../assets/funcions.js';
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
    this.majus();
    yellowSubmarine("titolProva");
    changeSize("taula", "35px")
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

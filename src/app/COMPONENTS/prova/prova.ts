import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {changeSize, countWords, yellowSubmarine} from '../../../assets/funcions.js';
// @ts-ignore
import { TextService, Llibre } from '../divadiv';

@Component({
  selector: 'app-prova',
  standalone: true,
  templateUrl: './prova.html',
  styleUrl: './prova.css',
})

export class Prova implements OnInit{
  private divadiv: any;

  constructor(private textService: TextService) {

  }

  ngOnInit() {
    yellowSubmarine("titolProva");
    changeSize("taula", "35px")
    countWords("ipsum")
    this.afegirImatge();

  }

  crearLlibre() {
    const llibre = new Llibre(
      "Pepe el mago",
      ["Fantasia", "Aventura"]
    );

    this.textService.setLlibre(llibre);
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

  afegirImatge() {
    const img = document.createElement("img");
    img.src = "https://dialprix.es/wp-content/uploads/IA-fresas.png";
    img.alt = "Unas fresas";
    img.width = 500;
    img.style.border = "2px solid black";

    document.body.appendChild(img);
  }

  guardarText() {
    const t = document.getElementById("origen")!.textContent!;
    this.textService.setText(t);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.scss']
})
export class MoedaComponent implements OnInit {
  Real: any;
  valorTotal: number | undefined;
  Dolar: number | undefined;
  Bath: number | undefined;
  Yuan: number | undefined;
  Lek: number | undefined;
  Russo: number | undefined;
  Somoni: number | undefined;
  Uzbeque: number | undefined;
  Argentino: number | undefined
  Kwanza: number | undefined
  constructor() {
  }
  calcularSoma(){
    this.valorTotal = Number(this.Real);
    this.Dolar = Number(this.Real)/5.06
    this.Bath = Number(this.Real)/7.10
    this.Yuan = Number(this.Real)/1.36
    this.Lek = Number(this.Real)/23.20
    this.Russo = Number(this.Real)/11.91
    this.Somoni = Number(this.Real)/2.02
    this.Uzbeque = Number(this.Real)/2138.76
    this.Argentino = Number(this.Real)/27.13
    this.Kwanza = Number(this.Real)/82.77
  }
  ngOnInit(): void {
  }

}

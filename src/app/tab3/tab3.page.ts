import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  dado = 0
  resultado = 0
  resultadoFinal = 0
  qtde = 1
  adicional = 0

  constructor() {}

  botaoJogar(jogar : number){
    this.dado = jogar
    this.resultado = (Math.floor(Math.random() * this.dado + 1))

    if (this.adicional >= 1){
    this.resultadoFinal = this.resultado + this.adicional
    }
    else{
      this.resultadoFinal = this.resultado
    }

  }



  addValor(){
    this.adicional += 1
  }

  remValor(){
    this.adicional -= 1
    if (this.adicional < 0){
      this.adicional = 0
    }
  }

  addDado(){
    this.qtde += 1
  }

  remDado(){
    this.qtde -= 1
    if (this.qtde <= 0){
      this.qtde = 1
    }
  }

}

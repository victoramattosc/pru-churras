import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { generate, repeat } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  dado = 0
  resultado = 0
  total = 0
  qtde = 1
  adicional = 0
  tipo = 'somar';
  jogar = 0
  generatedText = ''

  constructor(public toastController: ToastController) { }

  async showNotification() {
    const toast = await this.toastController.create({
      icon: 'Dice',
      message: this.generatedText,
      duration: 5000
    });
    toast.present();
  }

  mudarTipo(tipo: any) {
    this.tipo = tipo.target.ariaLabel.toLowerCase();
  }

  somarTipo() {
    let total = 0
    for (let i = 0; i < this.qtde; i++) {
      this.dado = this.jogar
      const resultado = (Math.floor(Math.random() * this.dado + 1)) + this.adicional
      total += resultado
      this.generatedText = this.generatedText + `${resultado}${this.qtde === 1 ? '' : (i === this.qtde - 1 ? '' : ' + ')}`;
    }
    this.generatedText = this.generatedText + ` + ${this.adicional} = ${total}`;
    this.showNotification();
  }

  maiorTipo() {
    let maiorNum!: number
    for (let i = 0; i < this.qtde; i++) {
      this.dado = this.jogar
      this.resultado = (Math.floor(Math.random() * this.dado + 1))
      this.generatedText = this.generatedText + `${this.resultado}${this.qtde === 1 ? '' : (i === this.qtde - 1 ? '' : ' ; ')}`;
      if (!maiorNum) {
        maiorNum = this.resultado
      } else {
        if (this.resultado > maiorNum) {
          maiorNum = this.resultado
        }
      }
    }
    this.total = maiorNum + this.adicional
    this.generatedText = this.generatedText + ` + ${this.adicional} = ${this.total}`;
    this.showNotification();
  }

  menorTipo() {
    let menorNum! : number;
    for (let i = 0; i < this.qtde; i++) {
      this.dado = this.jogar
      this.resultado = (Math.floor(Math.random() * this.dado + 1))
      this.generatedText = this.generatedText + `${this.resultado}${this.qtde === 1 ? '' : (i === this.qtde - 1 ? '' : ' ; ')}`;
      if (!menorNum) {
        menorNum = this.resultado
      }
      else {
        if (this.resultado < menorNum) {
          menorNum = this.resultado
        }
      }
    }
    this.total = menorNum + this.adicional
    this.generatedText = this.generatedText + ` + ${this.adicional} = ${this.total}`;
    this.showNotification();
  }

  botaoJogar(jogar: number): void {
    this.generatedText = `${this.qtde}d${jogar} = `;
    this.jogar = jogar;
    if (this.tipo == 'somar') {
      this.somarTipo();
    } else if (this.tipo == 'maior') {
      this.maiorTipo();
    } else if (this.tipo == 'menor') {
      this.menorTipo();
    }
  }

  addValor() {
    this.adicional += 1
  }

  remValor() {
    this.adicional -= 1
    if (this.adicional < 0) {
      this.adicional = 0
    }
  }

  addDado() {
    this.qtde += 1
  }

  remDado() {
    this.qtde -= 1
    if (this.qtde <= 0) {
      this.qtde = 1
    }
  }
}

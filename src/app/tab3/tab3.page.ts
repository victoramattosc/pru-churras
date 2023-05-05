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


  constructor(public toastController: ToastController) {}


  async showNotification(generatedText: string) {
    const toast = await this.toastController.create({
      icon: 'Dice',
      message: generatedText,
      duration: 5000
    });
    toast.present();
  }

  setMode(tipo : String){

  }


  botaoJogar(jogar : number, tipo : string){
    let generatedText = `${this.qtde}d${jogar} = `;
     if (tipo == 'somar'){}
    /*let total = 0
    for(let i = 0; i < this.qtde; i++){
    this.dado = jogar
    const resultado = (Math.floor(Math.random() * this.dado + 1)) + this.adicional
    total += resultado
    generatedText = generatedText + `${resultado}${this.qtde === 1 ? '' : (i === this.qtde - 1 ? '' : ' + ')}`;
    }
    generatedText = generatedText + ` + ${this.adicional} = ${total}`;
    return this.showNotification(generatedText);

}
}*/
  let maiorNum
 for(let i = 0; i < this.qtde; i++){
  this.dado = jogar
  this.resultado = (Math.floor(Math.random() * this.dado + 1))
  this.total = this.resultado + this.adicional
  //Math.max(this.resultado) + this.adicional
  generatedText = generatedText + `${this.resultado}${this.qtde === 1 ? '' : (i === this.qtde - 1 ? '' : ' ; ')}`;
  if(!maiorNum){
    maiorNum = this.resultado
} else{
    if(this.resultado > maiorNum){
    maiorNum = this.resultado
}
}
}

/* for(let i = 0; i < this.qtde; i++){
  this.dado = jogar
  this.resultado = (Math.floor(Math.random() * this.dado + 1))
  this.total = Math.min(this.resultado) + this.adicional
  generatedText = generatedText + `${this.resultado}${this.qtde === 1 ? '' : (i === this.qtde - 1 ? '' : ' ; ')}`;
}
*/
generatedText = generatedText + ` + ${this.adicional} = ${this.total}`;
  return this.showNotification(generatedText);

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

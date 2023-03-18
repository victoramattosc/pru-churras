import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo= 1;
  pont1= 0;
  part1= 0;
  pont2= 0;
  part2= 0;

  constructor(private alertController: AlertController) {}

  // Botões

  botaoTruco1(){
    this.valendo = 1;
  }

  botaoTruco3(){
    this.valendo = 3;
  }

  botaoTruco6(){
    this.valendo = 6;
  }

  botaoTruco9(){
    this.valendo = 9;
  }

  botaoTruco12(){
    this.valendo = 12;
  }

  // Mais

  botaoMais1(){
    this.pont1 = this.pont1 + this.valendo;
    if(this.pont1 >= 12){
      this.part1 += 1;
      this.pont1 = 0
      this.pont2 = 0
      this.presentAlert1();
    }
    this.valendo = 1;
  }

  botaoMais2(){
    this.pont2 = this.pont2 + this.valendo;
    if(this.pont2 >= 12){
      this.part2 += 1;
      this.pont2 = 0
      this.pont1 = 0
      this.presentAlert2();
    }
    this.valendo = 1;
  }

  // Menos

  botaoMenos1(){
    this.pont1 = this.pont1 - this.valendo;
    if(this.pont1 < 0){
      this.pont1 = 0
    }
  }

  botaoMenos2(){
    this.pont2 = this.pont2 - this.valendo;
    if(this.pont2 < 0){
      this.pont2 = 0
    }
  }

  // Limpar

  limpar(){
    this.pont1 = 0;
    this.part1 = 0;
    this.pont2 = 0;
    this.part2 = 0;
    this.valendo = 1;
  }

  // Notificações

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Parabéns',
      message: 'Time 1 Venceu!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Parabéns',
      message: 'Time 2 Venceu!',
      buttons: ['OK'],
    });

    await alert.present();
  }



}

import { Component } from '@angular/core';

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

  constructor() {}


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

  botaoMais1(){
    this.pont1 = this.pont1 + this.valendo;
    if(this.pont1 >= 12){
      this.part1 += 1;
      this.pont1 = 0
    }
    this.valendo = 1;
  }

  botaoMenos1(){
    this.pont1 = this.pont1 - this.valendo;
    if(this.pont1 < 0){
      this.pont1 = 0
    }
  }

  botaoMais2(){
    this.pont2 = this.pont2 + this.valendo;
    if(this.pont2 >= 12){
      this.part2 += 1;
      this.pont2 = 0
    }
    this.valendo = 1;
  }

  botaoMenos2(){
    this.pont2 = this.pont2 - this.valendo;
    if(this.pont2 < 0){
      this.pont2 = 0
    }
  }

  limpar(){
    this.pont1 = 0;
    this.part1 = 0;
    this.pont2 = 0;
    this.part2 = 0;
  }


}

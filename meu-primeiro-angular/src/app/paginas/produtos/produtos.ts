import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  //Atributos
  contador: number = 0;
  ValorAtual: string = "";
  ValorSalvo: string = "";
  isMouseOver: boolean = false;

  incrementar(){
    this.contador++;
  }

  onKeyUp(event: any){
    this.ValorAtual = event.target.value;
  }

  //Salvar valor
  salvarValor(valor:string){
    this.ValorSalvo = valor;
  }

  //Alternar
  alternarDestaque(){
    this.isMouseOver = !this.isMouseOver;
  }
}

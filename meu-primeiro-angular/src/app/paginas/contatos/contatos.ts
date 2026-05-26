import { Component } from '@angular/core';

@Component({
  selector: 'app-contatos',
  imports: [],
  templateUrl: './contatos.html',
  styleUrl: './contatos.css',
})
export class Contatos {

  nome: string = "";
  email: string = "";
  mensagem: string = "";
  valorsalvo: string = "";

  onKeyUp(event: any){
    this.nome = event.target.value;
  }

  onKeyUpEmail(event: any){
    this.email = event.target.value;
  }

  onKeyUpMensagem(event: any){
    this.mensagem = event.target.value;
  }

  salvarValor(valor:string){
    this.valorsalvo = valor;
  }
}

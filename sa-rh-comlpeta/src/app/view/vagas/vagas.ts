import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../service/apiservice';
import { Vaga } from '../../model/vaga.model';

@Component({
  selector: 'app-vagas',
  imports: [],
  templateUrl: './vagas.html',
  styleUrl: './vagas.scss',
})
export class Vagas implements OnInit {
  //atributos
  //vetor para receber todas as vagas da api
  public vagas: Vaga[] = [];

  constructor(private _apiService: Apiservice) {} // ao abrir a página , estabele conexão com api

  // método para conectar com API

  listarVagas(): void {
    //preencher o vetor comas informações da API
    this._apiService.getVagas().subscribe(// Subscribe => Ferramenta do observable para fazer conexão assincrona
      //mapeamento de Dados
      (resposta) => {
        this.vagas = resposta.map(
          (e) => new Vaga(e.id, e.nome, e.foto, e.descricao, e.salario)
        );
      },
    );
  }

  //Método para carregamento ao iniciar a tela

  ngOnInit(): void {
    this.listarVagas();
  }
}

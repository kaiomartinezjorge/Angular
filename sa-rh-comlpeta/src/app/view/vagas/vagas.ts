import { Component, OnInit } from '@angular/core';
import { Vaga } from '../../model/vaga.model';
import { Apiservice } from '../../service/apiservice';

@Component({
  selector: 'app-vagas',
  imports: [],
  templateUrl: './vagas.html',
  styleUrl: './vagas.scss',
})
export class Vagas implements OnInit {
  public vagas: Vaga[] = [];

  constructor(private _apiService: Apiservice) {}

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(): void {
    this._apiService.getVagas().subscribe({
      next: (resposta) => {
        this.vagas = resposta.map(
          (e) => new Vaga(e.id, e.nome, e.foto, e.descricao, e.salario)
        );
      },
      error: () => alert('Nao foi possivel listar as vagas. Verifique se o json-server esta rodando.'),
    });
  }
}

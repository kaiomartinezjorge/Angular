import { Component, OnInit } from '@angular/core';
import { Curriculo } from '../../model/curriculo.model';
import { Apiservice } from '../../service/apiservice';

@Component({
  selector: 'app-curriculos',
  imports: [],
  templateUrl: './curriculos.html',
  styleUrl: './curriculos.scss',
})
export class Curriculos implements OnInit {
  public curriculos: Curriculo[] = [];

  constructor(private _apiService: Apiservice) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos(): void {
    this._apiService.getCurriculos().subscribe({
      next: (resposta) => {
        this.curriculos = resposta;
      },
      error: () => alert('Nao foi possivel listar os curriculos. Verifique se o json-server esta rodando.'),
    });
  }
}

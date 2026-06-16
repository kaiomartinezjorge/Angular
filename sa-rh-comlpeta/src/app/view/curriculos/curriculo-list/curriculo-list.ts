import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Curriculo } from '../../../model/curriculo.model';
import { Apiservice } from '../../../service/apiservice';

@Component({
  selector: 'app-curriculo-list',
  imports: [RouterLink],
  templateUrl: './curriculo-list.html',
  styleUrl: './curriculo-list.scss',
})
export class CurriculoList implements OnInit {
  public curriculos: Curriculo[] = [];
  public meuCurriculo = false;
  private usuarioLogadoId = 1;

  constructor(
    private _apiService: Apiservice,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.atualizarTela();

    this.router.events
      .pipe(filter((evento) => evento instanceof NavigationEnd))
      .subscribe(() => this.atualizarTela());
  }

  atualizarTela(): void {
    this.meuCurriculo = this.router.url.includes('meu-curriculo');
    this.listarCurriculos();
  }

  listarCurriculos(): void {
    if (this.meuCurriculo) {
      this._apiService.getCurriculoByUsuarioId(this.usuarioLogadoId).subscribe({
        next: (resposta) => this.curriculos = resposta,
        error: () => alert('Nao foi possivel listar os curriculos. Verifique se o json-server esta rodando.'),
      });
      return;
    }

    this._apiService.getCurriculos().subscribe({
      next: (resposta) => this.curriculos = resposta,
      error: () => alert('Nao foi possivel listar os curriculos. Verifique se o json-server esta rodando.'),
    });
  }

  excluirCurriculo(id: any): void {
    const confirmar = confirm('Deseja excluir este curriculo?');

    if (!confirmar) {
      return;
    }

    this._apiService.deleteCurriculo(id).subscribe({
      next: () => {
        alert('Curriculo excluido com sucesso.');
        this.listarCurriculos();
      },
      error: () => alert('Nao foi possivel excluir o curriculo. Verifique se o json-server esta rodando.'),
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Curriculo } from '../../../model/curriculo.model';
import { Apiservice } from '../../../service/apiservice';

@Component({
  selector: 'app-curriculo-detail',
  imports: [RouterLink],
  templateUrl: './curriculo-detail.html',
  styleUrl: './curriculo-detail.scss',
})
export class CurriculoDetail implements OnInit {
  public curriculo: Curriculo | null = null;

  constructor(
    private route: ActivatedRoute,
    private _apiService: Apiservice
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this._apiService.getCurriculoById(id).subscribe({
        next: (resposta) => this.curriculo = resposta,
        error: () => alert('Nao foi possivel carregar o curriculo. Verifique se o json-server esta rodando.'),
      });
    }
  }
}

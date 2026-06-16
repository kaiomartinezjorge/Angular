import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vaga } from '../../model/vaga.model';
import { Apiservice } from '../../service/apiservice';

@Component({
  selector: 'app-painel-vagas',
  imports: [FormsModule],
  templateUrl: './painel-vagas.html',
  styleUrl: './painel-vagas.scss',
})
export class PainelVagas implements OnInit {
  public vagas: Vaga[] = [];
  public vaga: Vaga = new Vaga('', '', '', '', 0);

  constructor(private _apiService: Apiservice) {}

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(): void {
    this._apiService.getVagas().subscribe({
      next: (resposta) => {
        this.vagas = resposta.map((e) => new Vaga(e.id, e.nome, e.foto, e.descricao, e.salario));
      },
      error: () => alert('Nao foi possivel listar as vagas. Verifique se o json-server esta rodando.'),
    });
  }

  listarVagaUnica(vaga: Vaga): void {
    this.vaga = new Vaga(vaga.id, vaga.nome, vaga.foto, vaga.descricao, vaga.salario);
  }

  cadastrarVaga(): void {
    const vaga = this.vaga.toMap() as Vaga;
    delete (vaga as any).id;

    this._apiService.postVaga(vaga).subscribe({
      next: () => {
        this.vaga = new Vaga('', '', '', '', 0);
        this.listarVagas();
        alert('Vaga cadastrada com sucesso');
      },
      error: () => alert('Nao foi possivel cadastrar a vaga. Verifique se o json-server esta rodando.'),
    });
  }

  atualizarVaga(id: any): void {
    if (!id) {
      alert('Selecione uma vaga antes de atualizar');
      return;
    }

    this._apiService.putVaga(id, this.vaga).subscribe({
      next: () => {
        this.vaga = new Vaga('', '', '', '', 0);
        this.listarVagas();
        alert('Vaga atualizada com sucesso');
      },
      error: () => alert('Nao foi possivel atualizar a vaga. Verifique se o json-server esta rodando.'),
    });
  }

  excluirVaga(id: any): void {
    if (!id) {
      alert('Selecione uma vaga antes de excluir');
      return;
    }

    this._apiService.deleteVaga(id).subscribe({
      next: () => {
        this.vaga = new Vaga('', '', '', '', 0);
        this.listarVagas();
        alert('Vaga excluida com sucesso');
      },
      error: () => alert('Nao foi possivel excluir a vaga. Verifique se o json-server esta rodando.'),
    });
  }
}

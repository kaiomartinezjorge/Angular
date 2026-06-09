import { Component, OnInit } from '@angular/core';
import { Vaga } from '../../model/vaga.model';
import { Apiservice } from '../../service/apiservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-painel-vagas',
  imports: [FormsModule],
  templateUrl: './painel-vagas.html',
  styleUrl: './painel-vagas.scss',
})
export class PainelVagas implements OnInit {
  //terminar de fazer o crud
  public vagas: Vaga[] = []; // carregar as info da API
  //Objeto para Interpolação do Formulário
  public vaga: Vaga = new Vaga(0, '', '', '', 0);

  constructor(private _apiService: Apiservice) {} //estabelece conexão quando a págian é carregada

  ngOnInit(): void {
    this.listarVagas();
  }

  // métodos READ ( Listar todas Vagas)
  listarVagas(): void {
    //preencher o vetor comas informações da API
    this._apiService.getVagas().subscribe(
      // subscribe => Ferramenta do Observable para fazer conexão Assincrona
      //mapeamento de Dados
      (resposta) => {
        //convertendo a Respostas da API em Obj para o Vetor
        this.vagas = resposta.map((e) => new Vaga(e.id, e.nome, e.foto, e.descricao, e.salario));
      },
    );
  }

  //Listar Vaga Unica (get)
  listarVagaUnica(vaga : Vaga){
    this.vaga = vaga
  }

  //criar
  cadastrarVaga(): void{
    this._apiService.postVaga(this.vaga).subscribe(
      //fazer a conexão de forma assincrona
      //limpar o campos do formulário
      () => {
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas();// atualiza a lista de vagas
        alert("Vaga Cadastrada com Sucesso");
      }
    );
  }

  //atualizar
  atualizarVaga(id:any): void{
    this._apiService.putVaga(id, this.vaga).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas();// atualiza a lista de vagas
        alert("Vaga Atualizada com Sucesso");
      }
    );
  }

  //deletar
  excluirVaga(id:any): void{
    this._apiService.deleteVaga(id).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0);
        this.listarVagas();// atualiza a lista de vagas
        alert("Vaga Excluída com Sucesso");
      }
    );
  }



}

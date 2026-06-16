import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../model/vaga.model';
import { Curriculo } from '../model/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  //atributo
  private apiUrl = 'http://localhost:3020/vagas'; // caminho da API
  private apiUrlCurriculos = 'http://localhost:3020/curriculos';

  constructor(private http: HttpClient) {} // ao criar um obj da API estabele a conexão com HttpClient

  //métodos de Conexão com API (GET, POST, PUT, DELETE)

  //get - read
  getVagas(): Observable<Vaga[]> {
    //Observable => permite conexões assincronas com a API
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  getCurriculos(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrlCurriculos);
  }

  getCurriculoById(id: any): Observable<Curriculo> {
    const urlBusca = `${this.apiUrlCurriculos}/${id}`;
    return this.http.get<Curriculo>(urlBusca);
  }

  getCurriculoByUsuarioId(usuarioId: number): Observable<Curriculo[]> {
    const urlBusca = `${this.apiUrlCurriculos}?usuarioId=${usuarioId}`;
    return this.http.get<Curriculo[]>(urlBusca);
  }

  //post - create
  postVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
  }

  postCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    return this.http.post<Curriculo>(this.apiUrlCurriculos, curriculo);
  }

  //put - update
  putVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const urlUpdate = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga[]>(urlUpdate, vaga);

  }

  putCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    const urlUpdate = `${this.apiUrlCurriculos}/${curriculo.id}`;
    return this.http.put<Curriculo>(urlUpdate, curriculo);
  }

    //delete - delete
  deleteVaga(id:any) : Observable<Vaga[]>{
    const urlDelete = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDelete);

  }

  deleteCurriculo(id: any): Observable<void> {
    const urlDelete = `${this.apiUrlCurriculos}/${id}`;
    return this.http.delete<void>(urlDelete);
  }
}

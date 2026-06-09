import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../model/vaga.model';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  //atributo
  private apiUrl = 'http://localhost:3020/vagas'; // caminho da API

  constructor(private http: HttpClient) {} // ao criar um obj da API estabele a conexão com HttpClient

  //métodos de Conexão com API (GET, POST, PUT, DELETE)

  //get - read
  getVagas(): Observable<Vaga[]> {
    //Observable => permite conexões assincronas com a API
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  //post - create
  postVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
  }

  //put - update
  putVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const urlUpdate = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga[]>(urlUpdate, vaga);

  }

    //delete - delete
  deleteVaga(id:any) : Observable<Vaga[]>{
    const urlDelete = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDelete);

  }
}

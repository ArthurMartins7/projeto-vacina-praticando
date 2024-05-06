import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

//O http client dentro do construtor swr
  constructor(private httpClient: HttpClient) { }

private readonly API = 'http://localhost:8080/estudo-de-caso-2/rest/pessoa';

  public consultarTodos(): Observable<Array<Pessoa>> {
    return this.httpClient.get<Array<Pessoa>>(this.API + '/todas');
  }

}

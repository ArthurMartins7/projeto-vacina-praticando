import { error } from 'console';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoaService } from './../../shared/service/pessoa.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-pessoa-listagem',
  standalone: true,
  imports: [],
  templateUrl: './pessoa-listagem.component.html',
  styleUrl: './pessoa-listagem.component.scss'
})
export class PessoaListagemComponent {

  constructor(
    private pessoaService: PessoaService
  ) {}

  public pessoas: Array<Pessoa> = new Array();

  public consultarTodasPessoas() {
    this.pessoaService.consultarTodos().subscribe(
      resultado => {
        this.pessoas = resultado;
      },
      erro => {
        console.log('Erro ao consultar todas as pessoas', erro);
      }

    )
  }
}

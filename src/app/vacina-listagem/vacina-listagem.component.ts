import { Component } from '@angular/core';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-vacina-listagem',
  standalone: true,
  imports: [],
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss'
})
export class VacinaListagemComponent {

testandoBotao() {
Swal.fire({
  title: 'Deseja testar o botão?',
  text: 'Essa ação não poderá ser desfeita',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'sim, testar!',
  cancelButtonText: 'Cancelar'
}).then((result) => {
        Swal.fire('Sucesso!','Testado com sucesso.', 'success');

      },
      (erro) => {
        Swal.fire('Erro!', 'Erro ao excluir vacina: ' + erro.error.mensagem, 'error');
      }

    );
  }

}



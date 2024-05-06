import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PessoaListagemComponent } from "./pessoa/pessoa-listagem/pessoa-listagem.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PessoaListagemComponent]
})
export class AppComponent {
  title = 'projeto-vacina-praticando';
}

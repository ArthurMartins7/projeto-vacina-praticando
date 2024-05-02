import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VacinaListagemComponent } from "./vacina-listagem/vacina-listagem.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, VacinaListagemComponent]
})
export class AppComponent {
  title = 'projeto-vacina-praticando';
}

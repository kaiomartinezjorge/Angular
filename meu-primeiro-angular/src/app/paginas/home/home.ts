import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //Declarar um atributo
  nome: String = 'Maria';
  // Interpolação {{}} (Unidireconal = TS -> HTML)

  imgUrl: String = 'https://www.spfcpedia.com.br/coloridas/1943/charge01.png';
  //Property bind [] (Unidirecional TS -> HTML)

  botaoStatus: boolean = false;
  //Property bind [] (Unidirecional TS -> HTML)

  //Style e Class Binding =: Alteração de classe e Style via data Binding
  classeAlerta: String = "alert-success"
}

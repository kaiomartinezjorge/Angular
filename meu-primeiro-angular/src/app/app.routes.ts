import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { Contatos } from './paginas/contatos/contatos';
import { Produtos } from './paginas/produtos/produtos';

export const routes: Routes = [
  {path: "", component: Home},
  {path: "home", component: Home},
  {path: "contatos", component: Contatos},
  {path: "produtos", component: Produtos}
];

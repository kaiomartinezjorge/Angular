import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { Vagas } from './view/vagas/vagas';
import { PainelVagas } from './view/painel-vagas/painel-vagas';

export const routes: Routes = [
  {path: "", component: Home},
  {path: "vagas", component: Vagas},
  {path: "painel-vagas", component: PainelVagas}
];

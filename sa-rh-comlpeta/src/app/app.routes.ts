import { Routes } from '@angular/router';
import { Home } from './view/home/home';
import { Vagas } from './view/vagas/vagas';
import { PainelVagas } from './view/painel-vagas/painel-vagas';
import { CurriculoForm } from './view/curriculos/curriculo-form/curriculo-form';
import { CurriculoList } from './view/curriculos/curriculo-list/curriculo-list';
import { CurriculoDetail } from './view/curriculos/curriculo-detail/curriculo-detail';

export const routes: Routes = [
  {path: "", component: Home},
  {path: "curriculos", component: CurriculoList},
  {path: "curriculos/novo", component: CurriculoForm},
  {path: "curriculos/editar/:id", component: CurriculoForm},
  {path: "curriculos/:id", component: CurriculoDetail},
  {path: "meu-curriculo", component: CurriculoList},
  {path: "vagas", component: Vagas},
  {path: "painel-vagas", component: PainelVagas}
];

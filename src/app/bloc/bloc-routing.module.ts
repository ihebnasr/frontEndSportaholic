import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEquipeComponent} from '../equipe/list-equipe/list-equipe.component';
import {UpdateBlocComponent} from './update-bloc/update-bloc.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'bloc'
    },
    children: [
      {
        path: 'updateBloc/:id',
        component: UpdateBlocComponent,
        data: {
          title: 'list equipe'
        }
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule { }

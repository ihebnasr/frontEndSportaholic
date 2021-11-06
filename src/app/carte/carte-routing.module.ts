import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEquipeComponent} from '../equipe/list-equipe/list-equipe.component';
import {AddEquipeComponent} from '../equipe/add-equipe/add-equipe.component';
import {AddCarteComponent} from './add-carte/add-carte.component';
import {ListCarteComponent} from './list-carte/list-carte.component';
import {UpdateCarteComponent} from './update-carte/update-carte.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'carte'
    },
    children: [
      {
        path: '',
        redirectTo: 'allCarte'
      },
      {
        path: 'allCarte',
        component: ListCarteComponent,
        data: {
          title: 'list carte'
        }
      },
      {
        path: 'addCarte',
        component: AddCarteComponent,
        data: {
          title: 'add carte'
        }
      },
      {
        path: 'updateCarte/:id',
        component: UpdateCarteComponent,
        data: {
          title: 'update carte'
        }
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteRoutingModule { }

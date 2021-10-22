import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListStadeComponent} from './list-stade/stade.component';
import {UpdateStadeComponent} from './update-stade/update-stade.component';
import {AddStadeComponent} from './add-stade/add-stade.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'stade'
    },
    children: [
      {
        path: '',
        redirectTo: 'listStade'
      },
      {
        path: 'listStade',
        component: ListStadeComponent,
        data: {
          title: 'List stade'
        }
      },
      {
        path: 'addStade',
        component: AddStadeComponent,
        data: {
          title: 'add stade'
        }
      },
      {
        path: 'updateStade/:id',
        component: UpdateStadeComponent,
        data: {
          title: 'update users'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StadeRoutingModule {}

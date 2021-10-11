import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListStadeComponent} from './list-stade/stade.component';
import {UpdateStadeComponent} from './update-stade/update-stade.component';

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
        path: 'updateStade/:username',
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

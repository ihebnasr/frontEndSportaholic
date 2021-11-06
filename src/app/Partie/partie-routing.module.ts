import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStadeComponent} from '../stade/list-stade/stade.component';
import {ListePartieComponent} from './liste-partie/liste-partie.component';
import {AddPartieComponent} from './add-partie/add-partie.component';
import {ListPartieUserComponent} from './list-partie-user/list-partie-user.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Partie'
    },
    children: [
      {
        path: '',
        redirectTo: 'listPartie'
      },
      {
        path: 'listPartie',
        component: ListePartieComponent,
        data: {
          title: 'List stade'
        }
      },
      {
        path: 'addPartie',
        component: AddPartieComponent,
        data: {
          title: 'ajouter stade'
        }
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartieRoutingModule { }

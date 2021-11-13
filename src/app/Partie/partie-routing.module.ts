import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStadeComponent} from '../stade/list-stade/stade.component';
import {ListePartieComponent} from './liste-partie/liste-partie.component';
import {AddPartieComponent} from './add-partie/add-partie.component';
import {ListPartieUserComponent} from './list-partie-user/list-partie-user.component';
import {UpdatePartieComponent} from './update-partie/update-partie.component';
import {BlocPartieComponent} from './bloc-partie/bloc-partie.component';

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
      },
      {
        path: 'updatePartie/:id',
        component: UpdatePartieComponent,
        data: {
          title: 'modifie Partie'
        }
      },
      {
        path: 'addBlocPartie/:idP/:idB',
        component: BlocPartieComponent,
        data: {
          title: 'modifie Partie'
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

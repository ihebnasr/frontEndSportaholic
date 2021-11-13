import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListePartieComponent} from '../Partie/liste-partie/liste-partie.component';
import {ListResevationComponent} from './list-resevation/list-resevation.component';

const routes: Routes = [
  {
  path: '',
  data: {
    title: 'reservation'
  },
  children: [
    {
      path: '',
      redirectTo: 'listReservation'
    },
    {
      path: 'listReservation',
      component: ListResevationComponent,
      data: {
        title: 'liste de reservation'
      }
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }

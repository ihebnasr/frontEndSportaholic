import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import {ListResevationComponent} from './list-resevation/list-resevation.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ListResevationComponent,

  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule
  ]
})
export class ReservationModule { }

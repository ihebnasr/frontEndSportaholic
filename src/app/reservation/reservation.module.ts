import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import {ListResevationComponent} from './list-resevation/list-resevation.component';
import {FormsModule} from '@angular/forms';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    ListResevationComponent,

  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule,
    FilterPipeModule,
    NgxPaginationModule
  ]
})
export class ReservationModule { }

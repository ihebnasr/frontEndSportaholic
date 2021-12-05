import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipeRoutingModule } from './equipe-routing.module';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {FilterPipeModule} from 'ngx-filter-pipe';



@NgModule({
  imports: [
    CommonModule,
    EquipeRoutingModule,
    NgxPaginationModule,
    FormsModule,
    FilterPipeModule
  ],
  exports: [
    ListEquipeComponent,
    ListEquipeComponent
  ],
    declarations: [
        ListEquipeComponent,

    ]
})
export class EquipeModule { }

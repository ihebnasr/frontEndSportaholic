import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartieRoutingModule } from './partie-routing.module';
import {ListePartieComponent} from './liste-partie/liste-partie.component';
import { AddPartieComponent } from './add-partie/add-partie.component';
import {FormsModule} from '@angular/forms';
import { ListPartieUserComponent } from './list-partie-user/list-partie-user.component';
import { ListPartieVUserComponent } from './list-partie-vuser/list-partie-vuser.component';


@NgModule({
  declarations: [
    ListePartieComponent,
    AddPartieComponent,


  ],
  imports: [
    CommonModule,
    PartieRoutingModule,
    FormsModule,
  ]
})
export class PartieModule { }

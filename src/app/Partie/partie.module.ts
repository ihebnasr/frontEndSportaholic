import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartieRoutingModule } from './partie-routing.module';
import {ListePartieComponent} from './liste-partie/liste-partie.component';
import { AddPartieComponent } from './add-partie/add-partie.component';
import {FormsModule} from '@angular/forms';
import { ListPartieUserComponent } from './list-partie-user/list-partie-user.component';
import { ListPartieVUserComponent } from './list-partie-vuser/list-partie-vuser.component';
import { BlocPartieComponent } from './bloc-partie/bloc-partie.component';
import { UpdatePartieComponent } from './update-partie/update-partie.component';


@NgModule({
  declarations: [
    ListePartieComponent,
    AddPartieComponent,
    BlocPartieComponent,
    UpdatePartieComponent,


  ],
  imports: [
    CommonModule,
    PartieRoutingModule,
    FormsModule,
  ]
})
export class PartieModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import {UpdateBlocComponent} from './update-bloc/update-bloc.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UpdateBlocComponent
  ],
  imports: [
    CommonModule,
    BlocRoutingModule,
    FormsModule
  ]
})
export class BlocModule { }

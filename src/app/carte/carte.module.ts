import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteRoutingModule } from './carte-routing.module';
import {AddCarteComponent} from './add-carte/add-carte.component';
import {FormsModule} from '@angular/forms';
import {ListCarteComponent} from './list-carte/list-carte.component';
import { UpdateCarteComponent } from './update-carte/update-carte.component';


@NgModule({
  declarations: [
    AddCarteComponent,
    ListCarteComponent,
    UpdateCarteComponent
  ],
  imports: [
    CommonModule,
    CarteRoutingModule,
    FormsModule
  ]
})
export class CarteModule { }

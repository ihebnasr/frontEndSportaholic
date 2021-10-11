// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// stade Routing
import {ListStadeComponent} from './list-stade/stade.component';
import {UpdateStadeComponent} from './update-stade/update-stade.component';
import {StadeRoutingModule} from './Stade.routing.module';

@NgModule({
  imports: [
    CommonModule,
    StadeRoutingModule
  ],
  declarations: [
    ListStadeComponent,
    UpdateStadeComponent
  ]
})
export class StadeModule { }

// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// stade Routing
import {ListStadeComponent} from './list-stade/stade.component';
import {UpdateStadeComponent} from './update-stade/update-stade.component';
import {StadeRoutingModule} from './Stade.routing.module';
import {FormsModule} from '@angular/forms';
import {AddStadeComponent} from './add-stade/add-stade.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
        StadeRoutingModule,
        FormsModule,
        NgxPaginationModule
    ],
  declarations: [
    ListStadeComponent,
    UpdateStadeComponent,
    AddStadeComponent
  ]
})
export class StadeModule { }

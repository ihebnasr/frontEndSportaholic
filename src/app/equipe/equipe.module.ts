import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipeRoutingModule } from './equipe-routing.module';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';



@NgModule({
  imports: [
    CommonModule,
    EquipeRoutingModule
  ],
  declarations: [
    ListEquipeComponent,
    
  ]
})
export class EquipeModule { }

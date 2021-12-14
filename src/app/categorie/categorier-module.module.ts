import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorierModuleRoutingModule } from './categorier-module-routing.module';
import {CategorieComponent} from './listCategorie/categorie.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {FormsModule} from '@angular/forms';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';


@NgModule({
  declarations: [
    CategorieComponent,
    AddCategorieComponent,
    UpdateCategorieComponent
  ],
  imports: [
    CommonModule,
    CategorierModuleRoutingModule,
    NgxPaginationModule,
    FilterPipeModule,
    FormsModule
  ]
})
export class CategorierModuleModule { }

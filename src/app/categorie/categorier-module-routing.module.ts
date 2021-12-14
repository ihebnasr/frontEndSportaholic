import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEquipeComponent} from '../equipe/list-equipe/list-equipe.component';
import {CategorieComponent} from './listCategorie/categorie.component';
import {AddCategorieComponent} from './add-categorie/add-categorie.component';
import {UpdateCategorieComponent} from './update-categorie/update-categorie.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'categorie'
    },
    children: [
      {
        path: '',
        redirectTo: 'allCategorie'
      },
      {
        path: 'allCategorie',
        component: CategorieComponent,
        data: {
          title: 'liste Categorie'
        }
      },
      {
        path: 'addCategorie',
        component: AddCategorieComponent,
        data: {
          title: 'add Categorie'
        }
      },
      {
        path: 'updateCategorie/:id',
        component: UpdateCategorieComponent,
        data: {
          title: 'update Categorie'
        }
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorierModuleRoutingModule { }

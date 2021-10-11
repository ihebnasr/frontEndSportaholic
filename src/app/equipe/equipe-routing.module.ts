import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';


const routes: Routes = [
    {
      path: '',
      data: {
        title: 'equipes'
      },
      children: [
        {
          path: '',
          redirectTo: 'allequipe'
        },
        {
          path: 'allequipe',
          component: ListEquipeComponent,
          data: {
            title: 'list equipe'
          }
        },
        {
          path: 'addEquipe',
          component: AddEquipeComponent,
          data: {
            title: 'add equipe'
          } 
        },
        {
          path: 'updateEquipe/:id',
          component: UpdateEquipeComponent,
          data: {
            title: 'update equipe'
          } 
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EquipeRoutingModule {}
  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
    {
      path: '',
      data: {
        title: 'users'
      },
      children: [
        {
          path: '',
          redirectTo: 'userEnable'
        },
        {
          path: 'userEnable',
          component: ListUserComponent,
          data: {
            title: 'users enable'
          }
        },
        {
          path: 'updateUser/:username',
          component: UpdateUserComponent,
          data: {
            title: 'update users'
          }
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule {}
  
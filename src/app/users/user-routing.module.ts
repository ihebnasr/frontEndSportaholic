import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import {ListUserNotEnableComponent} from './list-user-not-enable/list-user-not-enable.component';


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
          },
        {
          path: 'userNotEnable',
          component: ListUserNotEnableComponent,
          data: {
            title: 'list users not enable'
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

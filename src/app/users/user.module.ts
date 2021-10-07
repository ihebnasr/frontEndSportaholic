// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListUserComponent } from './list-user/list-user.component';

// user Routing
import { UserRoutingModule } from './user-routing.module';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    ListUserComponent,
    UpdateUserComponent,
  ]
})
export class UserModule { }
// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListUserComponent } from './list-user/list-user.component';

// user Routing
import { UserRoutingModule } from './user-routing.module';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListUserNotEnableComponent } from './list-user-not-enable/list-user-not-enable.component';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        NgxQRCodeModule,
        FormsModule
    ],
  declarations: [
    ListUserComponent,
    UpdateUserComponent,
    ListUserNotEnableComponent,
  ]
})
export class UserModule { }

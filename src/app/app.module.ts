import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FilterPipeModule } from 'ngx-filter-pipe';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { AddEquipeComponent } from './equipe/add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './equipe/update-equipe/update-equipe.component';
import { HomeComponent } from './home/home.component';
import {AuthGuardService} from './itercepteur/AuthGuardService';
import {EquipeModule} from './equipe/equipe.module';
import {ListPartieUserComponent} from './Partie/list-partie-user/list-partie-user.component';
import {ListPartieVUserComponent} from './Partie/list-partie-vuser/list-partie-vuser.component';
import { NewCodeComponent } from './codeConfirmation/new-code/new-code.component';
import { AddResevationComponent } from './reservation/add-resevation/add-resevation.component';
import {UserProfileComponent} from './users/user-profile/user-profile.component';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import {ReservationUserComponent} from './reservation/reservation-user/reservation-user.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    EquipeModule,
    NgxQRCodeModule,
    NgxPaginationModule,
    FilterPipeModule,
    Ng2PageScrollModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    AddEquipeComponent,
    UpdateEquipeComponent,
    HomeComponent,
    ListPartieUserComponent,
    ListPartieVUserComponent,
    NewCodeComponent,
    AddResevationComponent,
    UserProfileComponent,
    ReservationUserComponent,

  ],
  providers: [

    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    IconSetService,
    AuthGuardService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

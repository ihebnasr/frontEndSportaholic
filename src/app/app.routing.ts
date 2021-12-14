import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { UpdateUserComponent } from './users/update-user/update-user.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './itercepteur/AuthGuardService';
import {ListPartieUserComponent} from './Partie/list-partie-user/list-partie-user.component';
import {ListPartieVUserComponent} from './Partie/list-partie-vuser/list-partie-vuser.component';
import {NewCodeComponent} from './codeConfirmation/new-code/new-code.component';
import {AddResevationComponent} from './reservation/add-resevation/add-resevation.component';
import {UserProfileComponent} from './users/user-profile/user-profile.component';
import {ReservationUserComponent} from './reservation/reservation-user/reservation-user.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    redirectTo: 'dashboard'
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: 'Partie/listPartieUser',
    component: ListPartieUserComponent,
    data: {
      title: 'Liste partie'
    },canActivate:[AuthGuardService],
  },
  {
    path: 'Partie/listPartieVUser',
    component: ListPartieVUserComponent,
    data: {
      title: 'Liste partie'
    },canActivate:[AuthGuardService],
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'codeConfirmation/codeconfirm/:num',
    component: NewCodeComponent,
    pathMatch: 'full',
    data: {
      title: 'code confirmation'
    }
  },
  {
    path: 'reservation/addReservation/:id',
    component: AddResevationComponent,
    pathMatch: 'full',
    data: {
      title: 'reservation partie'
    },canActivate:[AuthGuardService]
  },
  {
    path: 'reservation/mesRservations',
    component: ReservationUserComponent,
    pathMatch: 'full',
    data: {
      title: 'mes reservations '
    },canActivate:[AuthGuardService]
  },
  {
    path: 'users/userProfile',
    component: UserProfileComponent,
    pathMatch: 'full',
    data: {
      title: 'User profile'
    },canActivate:[AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'dashboard'
    },canActivate:[AuthGuardService],
    children: [

      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      {
        path: 'users',
        loadChildren : () => import('./users/user.module').then(m => m.UserModule)
      },
      {
        path: 'equipes',
        loadChildren : () => import('./equipe/equipe.module').then(m => m.EquipeModule)
      },
      {
        path: 'stade',
        loadChildren : () => import('./stade/Stade.module').then(m => m.StadeModule)

      },
      {
        path: 'bloc',
        loadChildren : () => import('./bloc/bloc.module').then(m => m.BlocModule)

      },
      {
        path: 'carte',
        loadChildren : () => import('./carte/carte.module').then(m => m.CarteModule)

      },
      {
        path: 'partie',
        loadChildren : () => import('./partie/partie.module').then(m => m.PartieModule)

      },
      {
        path: 'reservation',
        loadChildren : () => import('./reservation/reservation.module').then(m => m.ReservationModule)

      },
      {
        path: 'categorie',
        loadChildren : () => import('./categorie/categorier-module.module').then(m => m.CategorierModuleModule)

      }
    ]
  },
  { path: '**', component: P404Component }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

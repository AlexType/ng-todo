import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'log-in',
      },
      {
        path: 'log-in',
        component: LogInComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'recovery',
        component: RecoveryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizationRoutingModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LogInComponent,
    RecoveryComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthorizationRoutingModule,
    NzInputModule,
    NzButtonModule,
  ],
  providers: [],
})
export class AuthorizationModule {}

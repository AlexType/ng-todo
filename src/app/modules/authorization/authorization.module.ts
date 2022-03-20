import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LogInComponent,
    RegistrationComponent,
    RecoveryComponent,
  ],
  imports: [CommonModule, AuthorizationRoutingModule],
  providers: [],
})
export class AuthorizationModule {}

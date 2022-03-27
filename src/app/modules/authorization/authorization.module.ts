import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';

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
    FormsModule,
    ReactiveFormsModule,
    AuthorizationRoutingModule,
    NzInputModule,
    NzButtonModule,
    NzSpinModule,
    NzMessageModule,
  ],
  providers: [NzMessageService],
})
export class AuthorizationModule {}

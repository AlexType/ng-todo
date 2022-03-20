import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ru from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzResultModule } from 'ng-zorro-antd/result';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/404/404.component';
import { EditTaskModule } from './components/edit-task/edit-task.module';
import { AddTaskDialogComponent } from './components/layout/components/add-task-dialog/add-task-dialog.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LocalStorageService } from './services/local-storage.service';
import { MarkEffects } from './store/effects/mark.effect';
import { TaskEffects } from './store/effects/task.effect';
import { appReducers } from './store/reducers/_app.reducers';

registerLocaleData(ru);

const ngZorroConfig: NzConfig = {
  message: { nzTop: 40, nzMaxStack: 3 },
};
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AddTaskDialogComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    EditTaskModule,
    FormsModule,
    NzModalModule,
    NzDrawerModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzResultModule,
    NzAvatarModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TaskEffects, MarkEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    NzModalService,
    NzMessageService,
    LocalStorageService,
    { provide: NZ_I18N, useValue: ru_RU },
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}

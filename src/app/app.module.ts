import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AvatarModule } from 'primeng/avatar';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './components/button/button.module';
import { EditTaskModule } from './components/edit-task/edit-task.module';
import { AddTaskDialogComponent } from './components/layout/components/add-task-dialog/add-task-dialog.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LocalStorageService } from './services/local-storage.service';
import { TaskEffects } from './store/effects/task.effect';
import { appReducers } from './store/reducers/_app.reducers';

@NgModule({
  declarations: [AppComponent, LayoutComponent, AddTaskDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    SidebarModule,
    EditTaskModule,
    DynamicDialogModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TaskEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [LocalStorageService, DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}

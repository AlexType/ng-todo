import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ru from '@angular/common/locales/ru';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { NzResultModule } from 'ng-zorro-antd/result';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/404/404.component';
import { UserService } from './services/user.service';
import { MarkEffects } from './store/effects/mark.effect';
import { TaskEffects } from './store/effects/task.effect';
import { appReducers } from './store/reducers/_app.reducers';

registerLocaleData(ru, 'ru');

const ngZorroConfig: NzConfig = {
  message: { nzTop: 40, nzMaxStack: 3 },
};
@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    NzButtonModule,
    NzResultModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TaskEffects, MarkEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    UserService,
    { provide: NZ_I18N, useValue: ru_RU },
    { provide: LOCALE_ID, useValue: 'ru' },
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/404/404.component';

const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () =>
      import('./modules/pages/tasks/tasks.module').then((m) => m.TasksModule),
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./modules/pages/authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

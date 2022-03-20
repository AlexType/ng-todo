import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tasks',
        loadChildren: () =>
          import('./modules/tasks/tasks.module').then((m) => m.TasksModule),
      },
    ],
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./modules/authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { EditTaskModule } from 'src/app/components/edit-task/edit-task.module';

import { ListComponent } from './components/list/list.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { TaskComponent } from './components/task/task.component';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [ListComponent, TaskComponent, TaskViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    EditTaskModule,
    NzMessageModule,
    NzButtonModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzIconModule,
    NzTabsModule,
    NzTagModule,
  ],
  providers: [],
})
export class TasksModule {}

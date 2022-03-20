import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { EditTaskModule } from '../../shared/edit-task/edit-task.module';
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
    NzEmptyModule,
    NzModalModule,
    NzStatisticModule,
    NzDividerModule,
    NzDropDownModule,
  ],
  providers: [],
})
export class TasksModule {}

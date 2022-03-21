import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';
import { TaskCreateModalComponent } from './components/modals/task-create-modal/task-create-modal.component';
import { TaskViewModalComponent } from './components/modals/task-view-modal/task-view-modal.component';
import { SearchTaskComponent } from './components/search-task/search-task.component';
import { TaskComponent } from './components/task/task.component';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    TaskComponent,
    LayoutComponent,
    EditTaskComponent,
    SearchTaskComponent,
    TaskViewModalComponent,
    TaskCreateModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TasksRoutingModule,
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
    NzDrawerModule,
    NzInputModule,
    NzAvatarModule,
    NzListModule,
    NzSelectModule,
  ],
  providers: [NzModalService, NzMessageService, LocalStorageService],
  bootstrap: [ListComponent],
})
export class TasksModule {}

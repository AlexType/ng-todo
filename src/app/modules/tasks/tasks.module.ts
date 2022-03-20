import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { AddTaskModule } from 'src/app/components/add-task/add-task.module';
import { ButtonModule } from 'src/app/components/button/button.module';
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
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    CalendarModule,
    AddTaskModule,
    EditTaskModule,
    DividerModule,
    TagModule,
    CascadeSelectModule,
    DialogModule,
    TabViewModule,
  ],
  providers: [],
})
export class TasksModule {}

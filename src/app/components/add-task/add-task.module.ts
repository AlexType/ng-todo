import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

import { ButtonModule } from '../button/button.module';
import { EditTaskModule } from '../edit-task/edit-task.module';
import { AddTaskComponent } from './add-task.component';

@NgModule({
  declarations: [AddTaskComponent],
  exports: [AddTaskComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    EditTaskModule,
    DynamicDialogModule,
  ],
  providers: [DialogService],
  bootstrap: [AddTaskComponent],
})
export class AddTaskModule {}

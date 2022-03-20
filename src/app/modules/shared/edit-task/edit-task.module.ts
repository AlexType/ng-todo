import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { EditTaskComponent } from './edit-task.component';

@NgModule({
  declarations: [EditTaskComponent],
  exports: [EditTaskComponent],
  imports: [
    CommonModule,
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    ReactiveFormsModule,
    FormsModule,
    NzMessageModule,
    NzSelectModule,
    NzIconModule,
  ],
  bootstrap: [EditTaskComponent],
})
export class EditTaskModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { ButtonModule } from '../button/button.module';
import { EditTaskComponent } from './edit-task.component';

@NgModule({
  declarations: [EditTaskComponent],
  exports: [EditTaskComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class EditTaskModule {}

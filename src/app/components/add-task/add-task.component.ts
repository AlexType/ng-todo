import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  create(): void {
    this.ref?.close();

    this.ref = this.dialogService.open(EditTaskComponent, {
      header: 'Добавить задачу',
      width: '620px',
      modal: false,
      closeOnEscape: true,
    });
  }

  ngOnDestroy() {
    this.ref?.close();
  }
}

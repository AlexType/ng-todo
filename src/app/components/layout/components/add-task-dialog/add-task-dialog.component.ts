import { Component, Optional } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss'],
})
export class AddTaskDialogComponent {
  constructor(@Optional() private modal: NzModalRef) {}

  destroyModal(): void {
    this.modal.destroy();
  }
}

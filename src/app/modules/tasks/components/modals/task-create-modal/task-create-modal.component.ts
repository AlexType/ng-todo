import { Component, Optional } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-task-create-modal',
  templateUrl: './task-create-modal.component.html',
  styleUrls: ['./task-create-modal.component.scss'],
})
export class TaskCreateModalComponent {
  constructor(@Optional() private modal: NzModalRef) {}

  destroyModal(): void {
    this.modal.destroy();
  }
}

import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss'],
})
export class AddTaskDialogComponent {
  approve: any;

  constructor(public dialogConfig: DynamicDialogConfig) {
    this.approve = this.dialogConfig.data?.approve;
  }
}

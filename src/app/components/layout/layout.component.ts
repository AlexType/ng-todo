import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { AddTaskDialogComponent } from './components/add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  sidebarVisible: boolean = false;
  createTaskDialogRef: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  ngOnDestroy() {
    this.destroyDialog();
  }

  openDialog(): void {
    this.destroyDialog();

    this.createTaskDialogRef = this.dialogService.open(AddTaskDialogComponent, {
      header: 'Добавить задачу',
      width: '620px',
      modal: true,
      closeOnEscape: true,
      dismissableMask: true,
      data: {
        id: 2,
        approve: this.destroyDialog.bind(this),
      },
    });
  }

  destroyDialog(): void {
    this.createTaskDialogRef?.destroy();
  }

  toggleVisibleSidebar(visible: boolean = !this.sidebarVisible): void {
    this.sidebarVisible = visible;
  }
}

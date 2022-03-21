import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  sidebarVisible: boolean = false;

  constructor(private modalService: NzModalService) {}

  openModal(): void {
    this.modalService.create({
      nzContent: AddTaskDialogComponent,
      nzFooter: null,
      nzTitle: 'Добавить задачу',
    });
  }

  toggleVisibleSidebar(visible: boolean = !this.sidebarVisible): void {
    this.sidebarVisible = visible;
  }
}

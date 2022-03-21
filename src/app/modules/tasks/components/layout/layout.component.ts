import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, Observable, of, timer } from 'rxjs';

import { TaskCreateModalComponent } from '../modals/task-create-modal/task-create-modal.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  today: number = DateTime.now().get('day');
  sidebarVisible: boolean = false;

  realTime$: Observable<number> = of(0);

  constructor(private modalService: NzModalService) {
    this.realTime$ = timer(0, 1000).pipe(map(() => DateTime.now().toMillis()));
  }

  openModal(): void {
    this.modalService.create({
      nzContent: TaskCreateModalComponent,
      nzFooter: null,
      nzTitle: 'Добавить задачу',
    });
  }

  toggleVisibleSidebar(visible: boolean = !this.sidebarVisible): void {
    this.sidebarVisible = visible;
  }
}

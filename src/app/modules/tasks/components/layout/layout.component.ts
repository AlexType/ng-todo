import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, Observable, of, timer } from 'rxjs';

import { TaskCreateModalComponent } from '../modals/task-create-modal/task-create-modal.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  sidebarVisible: boolean = false;
  realTime$: Observable<number> = of(0);
  today: number = DateTime.now().get('day');

  constructor(private modalService: NzModalService) {}

  ngOnInit(): void {
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

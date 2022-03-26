import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, Observable, of, timer } from 'rxjs';
import { EColor, EFilterType } from 'src/const';

import { TaskCreateModalComponent } from '../modals/task-create-modal/task-create-modal.component';

interface IMenu {
  label: string;
  queryParams?: any;
  routerLink: string;
  icon: {
    svg: string;
    color: EColor;
    label?: string | number;
  };
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  sidebarVisible: boolean = false;
  realTime$: Observable<number> = of(0);

  menu: IMenu[] = [
    {
      label: 'Входящие',
      routerLink: '/tasks',
      icon: { svg: 'inbox', color: EColor.Blue },
    },
    {
      label: 'Сегодня',
      routerLink: '/tasks',
      queryParams: {
        deadline: EFilterType.Today,
      },
      icon: {
        svg: 'calendar',
        color: EColor.Green,
        label: DateTime.now().get('day'),
      },
    },
    {
      label: 'Предстоящие',
      routerLink: '/tasks',
      queryParams: {
        deadline: EFilterType.Upcoming,
      },
      icon: { svg: 'calendar-plus', color: EColor.Red },
    },
  ];

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

  setSidebarVisible(visible: boolean): void {
    this.sidebarVisible = visible;
  }
}

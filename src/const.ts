import { DateTime } from 'luxon';

import { ITask } from './app/models/task.interface';

export enum EColor {
  Blue = '#246fe0',
  Default = '#dfdfdf',
  Green = '#24e06c',
  Red = '#ff7066',
}

export enum ESortType {
  CreatedAtAsc = 'CreatedAt-asc',
  CreatedAtDec = 'CreatedAt-dec',
}

export enum EFilterType {
  Today = 'Today',
  Upcoming = 'Upcoming',
}

export interface IMenu {
  label: string;
  icon: string;
  type: ESortType;
}

export const sortMenu: IMenu[] = [
  {
    label: 'Дата создания',
    icon: 'sort-descending',
    type: ESortType.CreatedAtDec,
  },
  {
    label: 'Дата создания',
    icon: 'sort-ascending',
    type: ESortType.CreatedAtAsc,
  },
];

export function checkDeadline(date: number): boolean {
  return date < DateTime.now().startOf('day').toMillis();
}

export function sortTasks(
  tasks: ITask[],
  sortType: string | null = null
): ITask[] {
  switch (sortType) {
    case ESortType.CreatedAtAsc:
      return tasks.sort((a, b) => a.createdAt - b.createdAt);

    case ESortType.CreatedAtDec:
      return tasks.sort((a, b) => b.createdAt - a.createdAt);

    default:
      return tasks;
  }
}

export function filterTasks(tasks: ITask[], filterType: string): ITask[] {
  switch (filterType) {
    case EFilterType.Today:
      return tasks.filter(
        (t) =>
          !t.checked &&
          t.deadlineAt &&
          t.deadlineAt > DateTime.now().startOf('day').toMillis() &&
          t.deadlineAt < DateTime.now().endOf('day').toMillis()
      );

    case EFilterType.Upcoming:
      return tasks.filter(
        (t) =>
          !t.checked && t.deadlineAt && t.deadlineAt > DateTime.now().toMillis()
      );

    default:
      return tasks;
  }
}

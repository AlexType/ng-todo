import { DateTime } from 'luxon';

import { ITask } from './app/models/task.interface';

export enum TaskTypeEnum {
  INCOMING = 'incoming',
  UPCOMING = 'upcoming',
  TODAY = 'today',
}

export enum ESortType {
  CreatedAtAsc = 'CreatedAt-asc',
  CreatedAtDec = 'CreatedAt-dec',
}

export enum EFilterType {
  Today = 'Today',
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

export function checkDeadline(date: string | null = null): 'red' | 'green' {
  if (!date) return 'red';

  return new Date(date).getTime() < new Date().getTime() ? 'red' : 'green';
}

export function sortTasks(
  tasks: ITask[],
  sortType: string = ESortType.CreatedAtDec
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
          t.deadlineAt &&
          !t.checked &&
          t.deadlineAt > DateTime.now().startOf('day').toMillis() &&
          t.deadlineAt < DateTime.now().endOf('day').toMillis()
      );

    default:
      return tasks;
  }
}

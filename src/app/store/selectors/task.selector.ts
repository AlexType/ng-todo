import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/_app.state';
import { ITaskState } from '../state/task.state';

const selectTasks = (state: IAppState) => state.tasks;

export const selectTaskState = createSelector(
  selectTasks,
  (state: ITaskState) => state
);

export const selectTaskTotal = createSelector(
  selectTasks,
  (state: ITaskState) => state.total
);

export const selectTaskList = createSelector(
  selectTasks,
  (state: ITaskState) => state.tasks
);

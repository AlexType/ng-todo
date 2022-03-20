import { RouterReducerState } from '@ngrx/router-store';

import { IMarkState, initialMarkState } from './mark.state';
import { initialTaskState, ITaskState } from './task.state';

export interface IAppState {
  router?: RouterReducerState;
  tasks: ITaskState;
  marks: IMarkState;
}

export const initialAppState: IAppState = {
  tasks: initialTaskState,
  marks: initialMarkState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}

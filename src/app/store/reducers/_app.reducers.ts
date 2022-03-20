import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/_app.state';
import { markReducers } from './mark.reducers';
import { taskReducers } from './task.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  tasks: taskReducers,
  marks: markReducers,
};

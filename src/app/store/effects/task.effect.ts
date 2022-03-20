import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of, switchMap, withLatestFrom } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { ETaskActions, TasksGetTotal } from '../actions/task.actions';
import { selectTaskList } from '../selectors/task.selector';
import { IAppState } from '../state/_app.state';

@Injectable()
export class TaskEffects {
  constructor(
    private _actions$: Actions,
    private _ls: LocalStorageService,
    private _store$: Store<IAppState>
  ) {}

  loadMovies$ = createEffect(() =>
    this._actions$.pipe(
      ofType(
        ETaskActions.AddTask,
        ETaskActions.GetTasks,
        ETaskActions.RemoveTask,
        ETaskActions.UpdateTask
      ),
      withLatestFrom(this._store$.pipe(select(selectTaskList))),
      switchMap(([, tasks]) => {
        this._ls.setTask(tasks);

        return of(new TasksGetTotal({ total: tasks.length }));
      })
    )
  );
}

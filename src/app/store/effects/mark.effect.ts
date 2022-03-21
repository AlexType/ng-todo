import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of, switchMap, withLatestFrom } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { EMarkActions, MarksGetTotal } from '../actions/mark.actions';
import { selectMarkState } from '../selectors/mark.selector';
import { IAppState } from '../state/_app.state';

@Injectable()
export class MarkEffects {
  constructor(
    private _actions$: Actions,
    private _ls: LocalStorageService,
    private _store$: Store<IAppState>
  ) {}

  marks$ = createEffect(() =>
    this._actions$.pipe(
      ofType(
        EMarkActions.AddMark,
        EMarkActions.GetMarks,
        EMarkActions.DeleteMark,
        EMarkActions.UpdateMark,
        EMarkActions.AddSection,
        EMarkActions.GetSections,
        EMarkActions.DeleteSection,
        EMarkActions.UpdateSection
      ),
      withLatestFrom(this._store$.pipe(select(selectMarkState))),
      switchMap(([, marks]) => {
        this._ls.setMark(marks);

        return of(new MarksGetTotal({ total: marks.marks.length }));
      })
    )
  );
}

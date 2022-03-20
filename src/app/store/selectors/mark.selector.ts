import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/_app.state';
import { IMarkState } from '../state/mark.state';

const selectMarks = (state: IAppState) => state.marks;

export const selectMarkState = createSelector(
  selectMarks,
  (state: IMarkState) => state
);

export const selectMarkTotal = createSelector(
  selectMarks,
  (state: IMarkState) => state.total
);

export const selectMarkList = createSelector(
  selectMarks,
  (state: IMarkState) => state.marks
);

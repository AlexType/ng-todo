import { Action } from '@ngrx/store';
import { IMark } from 'src/app/models/mark.interface';
import { ISection } from 'src/app/models/section.interface';

import { IMarkState } from '../state/mark.state';

export enum EMarkActions {
  AddMark = '[Mark] Add Mark',
  DeleteMark = '[Mark] Delete Mark',
  UpdateMark = '[Mark] Update Mark',
  GetMarks = '[Mark] Get Marks',
  MarksGetTotal = '[Mark] Marks Get Total',

  AddSection = '[Section] Add Section',
  DeleteSection = '[Section] Delete Section',
  UpdateSection = '[Section] Update Section',
  GetSections = '[Section] Get Sections',
}

export class AddMark implements Action {
  public readonly type = EMarkActions.AddMark;
  constructor(public payload: { mark: IMark }) {}
}

export class DeleteMark implements Action {
  public readonly type = EMarkActions.DeleteMark;
  constructor(public payload: { id: string }) {}
}

export class UpdateMark implements Action {
  public readonly type = EMarkActions.UpdateMark;
  constructor(public payload: { mark: IMark }) {}
}

export class GetMarks implements Action {
  public readonly type = EMarkActions.GetMarks;
  constructor(public payload: { markState: IMarkState }) {}
}

export class MarksGetTotal implements Action {
  public readonly type = EMarkActions.MarksGetTotal;
  constructor(
    public payload: {
      total: number;
    }
  ) {}
}

export class AddSection implements Action {
  public readonly type = EMarkActions.AddSection;
  constructor(public payload: { section: ISection }) {}
}

export class DeleteSection implements Action {
  public readonly type = EMarkActions.DeleteSection;
  constructor(public payload: { id: string }) {}
}

export class UpdateSection implements Action {
  public readonly type = EMarkActions.UpdateSection;
  constructor(public payload: { section: ISection }) {}
}

export type MarkActions =
  | AddMark
  | DeleteMark
  | UpdateMark
  | GetMarks
  | MarksGetTotal
  | AddSection
  | DeleteSection
  | UpdateSection;

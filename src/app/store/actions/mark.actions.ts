import { Action } from '@ngrx/store';
import { IMark } from 'src/app/models/mark.interface';

export enum EMarkActions {
  AddMark = '[Mark] Add Mark',
  DeleteMark = '[Mark] Delete Mark',
  UpdateMark = '[Mark] Update Mark',
  GetMarks = '[Mark] Get Marks',
  MarksGetTotal = '[Mark] Marks Get Total',
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
  constructor(public payload: { marks: IMark[] }) {}
}

export class MarksGetTotal implements Action {
  public readonly type = EMarkActions.MarksGetTotal;
  constructor(
    public payload: {
      total: number;
    }
  ) {}
}

export type MarkActions =
  | AddMark
  | DeleteMark
  | UpdateMark
  | GetMarks
  | MarksGetTotal;

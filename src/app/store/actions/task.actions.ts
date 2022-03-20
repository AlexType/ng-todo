import { Action } from '@ngrx/store';
import { ITask } from 'src/app/models/task.interface';

export enum ETaskActions {
  AddTask = '[Task] Add Task',
  RemoveTask = '[Task] Remove Task',
  UpdateTask = '[Task] Update Task',
  GetTasks = '[Task] Get Tasks',
  TasksGetTotal = '[Task] Tasks Get Total',
}

export class AddTask implements Action {
  public readonly type = ETaskActions.AddTask;
  constructor(public payload: ITask) {}
}

export class RemoveTask implements Action {
  public readonly type = ETaskActions.RemoveTask;
  constructor(public payload: string) {}
}

export class UpdateTask implements Action {
  public readonly type = ETaskActions.UpdateTask;
  constructor(public payload: ITask) {}
}

export class GetTasks implements Action {
  public readonly type = ETaskActions.GetTasks;
  constructor(public payload: ITask[]) {}
}

export class TasksGetTotal implements Action {
  public readonly type = ETaskActions.TasksGetTotal;
  constructor(
    public payload: {
      total: number;
    }
  ) {}
}

export type TaskActions =
  | AddTask
  | RemoveTask
  | UpdateTask
  | GetTasks
  | TasksGetTotal;

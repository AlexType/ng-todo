import { ITask } from 'src/app/models/task.interface';

export interface ITaskState {
  tasks: ITask[];
  total: number;
}

export const initialTaskState: ITaskState = {
  tasks: [],
  total: 0,
};
